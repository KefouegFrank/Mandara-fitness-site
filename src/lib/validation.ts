/**
 * src/lib/validation.ts
 * Input validation utilities for API endpoints.
 * Provides safe parsing and validation for common data types.
 */

export interface ValidationResult<T> {
    success: boolean;
    data?: T;
    errors?: Record<string, string>;
}

/**
 * Validate email format.
 */
export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validate password strength.
 * Minimum 8 characters, at least one uppercase, one lowercase, one digit.
 */
export function validatePassword(password: string): boolean {
    if (password.length < 8) return false;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    return hasUpper && hasLower && hasDigit;
}

/**
 * Validate file MIME type for media uploads.
 */
export function isValidMediaMimeType(mimeType: string): boolean {
    const allowed = [
        'application/pdf',
        'image/jpeg',
        'image/png',
        'image/webp',
        'video/mp4',
        'video/quicktime',
    ];
    return allowed.includes(mimeType);
}

/**
 * Sanitize filename for S3 storage.
 */
export function sanitizeFileName(fileName: string): string {
    return fileName
        .toLowerCase()
        .replace(/[^a-z0-9._-]/g, '_')
        .replace(/_+/g, '_')
        .substring(0, 255);
}

/**
 * Validate age range string (e.g., "25-34").
 */
export function validateAgeRange(ageRange: string): boolean {
    const ageRegex = /^\d{1,2}-\d{1,2}$/;
    if (!ageRegex.test(ageRange)) return false;
    const [min, max] = ageRange.split('-').map(Number);
    return min >= 13 && max <= 120 && min <= max;
}

/**
 * Validate height in centimeters.
 */
export function validateHeight(heightCm: number): boolean {
    return heightCm >= 50 && heightCm <= 300;
}

/**
 * Validate weight in kilograms.
 */
export function validateWeight(weightKg: number): boolean {
    return weightKg >= 20 && weightKg <= 500;
}
