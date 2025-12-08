/**
 * src/__tests__/lib/validation.test.ts
 * Unit tests for validation schemas
 */

import { describe, it, expect } from 'vitest';
import {
    LoginRequestSchema,
    RegisterRequestSchema,
    UpdateProfileRequestSchema,
    PresignedUrlRequestSchema,
} from '@/lib/schemas';

describe('Validation Schemas', () => {
    describe('LoginRequestSchema', () => {
        it('should validate valid login request', () => {
            const data = { email: 'user@example.com', password: 'password123' };
            const result = LoginRequestSchema.safeParse(data);
            expect(result.success).toBe(true);
        });

        it('should reject invalid email', () => {
            const data = { email: 'invalid-email', password: 'password123' };
            const result = LoginRequestSchema.safeParse(data);
            expect(result.success).toBe(false);
        });

        it('should reject missing password', () => {
            const data = { email: 'user@example.com' };
            const result = LoginRequestSchema.safeParse(data);
            expect(result.success).toBe(false);
        });
    });

    describe('RegisterRequestSchema', () => {
        it('should validate valid registration request', () => {
            const data = {
                email: 'user@example.com',
                password: 'SecurePass123',
                name: 'John Doe',
            };
            const result = RegisterRequestSchema.safeParse(data);
            expect(result.success).toBe(true);
        });

        it('should reject weak password (less than 8 chars)', () => {
            const data = {
                email: 'user@example.com',
                password: 'Pass12',
            };
            const result = RegisterRequestSchema.safeParse(data);
            expect(result.success).toBe(false);
        });

        it('should reject password without uppercase', () => {
            const data = {
                email: 'user@example.com',
                password: 'securepass123',
            };
            const result = RegisterRequestSchema.safeParse(data);
            expect(result.success).toBe(false);
        });

        it('should reject password without digit', () => {
            const data = {
                email: 'user@example.com',
                password: 'SecurePassword',
            };
            const result = RegisterRequestSchema.safeParse(data);
            expect(result.success).toBe(false);
        });
    });

    describe('UpdateProfileRequestSchema', () => {
        it('should validate partial profile update', () => {
            const data = { name: 'Jane Doe', heightCm: 170 };
            const result = UpdateProfileRequestSchema.safeParse(data);
            expect(result.success).toBe(true);
        });

        it('should reject invalid height (negative)', () => {
            const data = { heightCm: -170 };
            const result = UpdateProfileRequestSchema.safeParse(data);
            expect(result.success).toBe(false);
        });

        it('should allow empty object', () => {
            const data = {};
            const result = UpdateProfileRequestSchema.safeParse(data);
            expect(result.success).toBe(true);
        });
    });

    describe('PresignedUrlRequestSchema', () => {
        it('should validate valid presigned URL request', () => {
            const data = {
                fileName: 'certificate.pdf',
                mimeType: 'application/pdf',
                fileSize: 1024000,
            };
            const result = PresignedUrlRequestSchema.safeParse(data);
            expect(result.success).toBe(true);
        });

        it('should reject file exceeding 50MB', () => {
            const data = {
                fileName: 'large-video.mp4',
                mimeType: 'video/mp4',
                fileSize: 52428801, // 50MB + 1 byte
            };
            const result = PresignedUrlRequestSchema.safeParse(data);
            expect(result.success).toBe(false);
        });

        it('should reject missing mimeType', () => {
            const data = {
                fileName: 'file.pdf',
                fileSize: 1024000,
            };
            const result = PresignedUrlRequestSchema.safeParse(data);
            expect(result.success).toBe(false);
        });
    });
});
