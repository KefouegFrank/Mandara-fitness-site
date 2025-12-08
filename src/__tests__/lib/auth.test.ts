/**
 * src/__tests__/lib/auth.test.ts
 * Unit tests for authentication utilities
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { signJwt, verifyJwt, hashPassword, comparePassword } from '@/lib/auth';

describe('Authentication Utilities', () => {
    describe('JWT', () => {
        it('should sign and verify a valid token', () => {
            const payload = { userId: 1, role: 'COACH' };
            const token = signJwt(payload, '1h');

            const verified = verifyJwt(token);
            expect(verified).not.toBeNull();
            expect(verified?.userId).toBe(1);
            expect(verified?.role).toBe('COACH');
        });

        it('should return null for invalid token', () => {
            const verified = verifyJwt('invalid-token');
            expect(verified).toBeNull();
        });

        it('should return null for undefined token', () => {
            const verified = verifyJwt(undefined);
            expect(verified).toBeNull();
        });

        it('should return null for expired token', () => {
            const payload = { userId: 1 };
            const token = signJwt(payload, '0s'); // Expired immediately

            // Wait a bit to ensure expiration
            return new Promise((resolve) => {
                setTimeout(() => {
                    const verified = verifyJwt(token);
                    expect(verified).toBeNull();
                    resolve(undefined);
                }, 100);
            });
        });
    });

    describe('Password Hashing', () => {
        it('should hash password correctly', async () => {
            const password = 'TestPassword123';
            const hashed = await hashPassword(password);

            expect(hashed).not.toBe(password);
            expect(hashed.length).toBeGreaterThan(0);
        });

        it('should verify correct password', async () => {
            const password = 'TestPassword123';
            const hashed = await hashPassword(password);

            const isValid = await comparePassword(password, hashed);
            expect(isValid).toBe(true);
        });

        it('should reject incorrect password', async () => {
            const password = 'TestPassword123';
            const hashed = await hashPassword(password);

            const isValid = await comparePassword('WrongPassword123', hashed);
            expect(isValid).toBe(false);
        });
    });
});
