/**
 * src/lib/rate-limit.ts
 * Simple in-memory rate limiting for API endpoints.
 * For production, use a distributed cache (Redis).
 */

interface RateLimitStore {
    [key: string]: { count: number; resetTime: number };
}

const store: RateLimitStore = {};

/**
 * Check if a request should be rate-limited.
 * @param key - Unique identifier (e.g., IP + endpoint)
 * @param limit - Max requests allowed
 * @param windowMs - Time window in milliseconds (default: 60 seconds)
 * @returns true if request should be allowed, false if rate-limited
 */
export function checkRateLimit(key: string, limit: number = 10, windowMs: number = 60000): boolean {
    const now = Date.now();
    const record = store[key];

    if (!record || now > record.resetTime) {
        // First request or window expired
        store[key] = { count: 1, resetTime: now + windowMs };
        return true;
    }

    if (record.count < limit) {
        record.count++;
        return true;
    }

    return false;
}

/**
 * Get remaining requests for a key.
 */
export function getRemainingRequests(key: string, limit: number = 10): number {
    const record = store[key];
    if (!record) return limit;
    return Math.max(0, limit - record.count);
}

/**
 * Reset rate limit for a key.
 */
export function resetRateLimit(key: string): void {
    delete store[key];
}

/**
 * Cleanup expired rate limit records (call periodically).
 */
export function cleanupExpiredRecords(): void {
    const now = Date.now();
    Object.keys(store).forEach((key) => {
        if (now > store[key].resetTime) {
            delete store[key];
        }
    });
}

// Cleanup every 10 minutes
setInterval(cleanupExpiredRecords, 10 * 60 * 1000);
