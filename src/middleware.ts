/**
 * src/middleware.ts
 * Next.js middleware for request processing, including rate limiting.
 */

import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter for development
// For production, use Redis or a dedicated service
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_CONFIG = {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100, // requests per window
    authMaxRequests: 5, // stricter limit for auth endpoints
    authWindowMs: 15 * 60 * 1000, // 15 minutes
};

function getClientIp(request: NextRequest): string {
    return (
        request.headers.get('x-forwarded-for')?.split(',')[0] ||
        request.headers.get('x-real-ip') ||
        'unknown'
    );
}

function isRateLimited(
    key: string,
    maxRequests: number,
    windowMs: number,
): boolean {
    const now = Date.now();
    const record = rateLimitStore.get(key);

    if (!record || now > record.resetTime) {
        rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
        return false;
    }

    record.count += 1;
    return record.count > maxRequests;
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const clientIp = getClientIp(request);

    // Determine rate limit based on endpoint
    const isAuthEndpoint = /^\/api\/(auth|login|register)/.test(pathname);
    const maxRequests = isAuthEndpoint
        ? RATE_LIMIT_CONFIG.authMaxRequests
        : RATE_LIMIT_CONFIG.maxRequests;
    const windowMs = isAuthEndpoint
        ? RATE_LIMIT_CONFIG.authWindowMs
        : RATE_LIMIT_CONFIG.windowMs;

    // Check rate limit
    const rateLimitKey = `${clientIp}:${isAuthEndpoint ? 'auth' : 'api'}`;
    if (isRateLimited(rateLimitKey, maxRequests, windowMs)) {
        return NextResponse.json(
            {
                success: false,
                error: {
                    code: 'RATE_LIMIT_EXCEEDED',
                    message: 'Too many requests. Please try again later.',
                },
            },
            { status: 429 },
        );
    }

    // Add request ID for tracing
    const requestId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const response = NextResponse.next();
    response.headers.set('x-request-id', requestId);

    return response;
}

export const config = {
    matcher: [
        // Apply middleware to API routes
        '/api/:path*',
    ],
};
