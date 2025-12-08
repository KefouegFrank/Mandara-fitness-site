/**
 * src/__tests__/setup.ts
 * Global test setup for Vitest
 */

import { beforeEach, afterEach, vi } from 'vitest';

// Mock environment variables for tests
beforeEach(() => {
    process.env.JWT_SECRET = 'test-jwt-secret-key-12345';
    process.env.NODE_ENV = 'test';
    process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/mandara_test';
});

// Clean up after each test
afterEach(() => {
    vi.clearAllMocks();
});

// Global mocks
vi.mock('@/lib/prisma', () => ({
    prisma: {
        user: {
            findUnique: vi.fn(),
            create: vi.fn(),
            update: vi.fn(),
        },
        coachProfile: {
            findUnique: vi.fn(),
            create: vi.fn(),
            update: vi.fn(),
        },
        clientProfile: {
            findUnique: vi.fn(),
            create: vi.fn(),
        },
    },
}));
