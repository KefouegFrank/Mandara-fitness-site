import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import bcrypt from 'bcrypt';

// Use a secure secret in production. For development a fallback exists but
// code will warn if running in production without a secret.
const JWT_SECRET = process.env.JWT_SECRET || '';

if (!JWT_SECRET && process.env.NODE_ENV === 'production') {
    throw new Error('JWT_SECRET must be set in production');
}

export function signJwt(payload: object, expiresIn = '7d') {
    return jwt.sign(payload, JWT_SECRET || 'dev-secret-placeholder', { expiresIn });
}

export function verifyJwt(token?: string) {
    if (!token) return null;
    try {
        return jwt.verify(token, JWT_SECRET || 'dev-secret-placeholder') as any;
    } catch (e) {
        return null;
    }
}

/**
 * Safely extract the Bearer token from an incoming request.
 * Works for both `Request` and `NextRequest` server handlers.
 */
export function getTokenFromHeader(req: Request | NextRequest) {
    // @ts-ignore - both Request and NextRequest expose `.headers.get` in Next.js
    const auth = (req as any).headers?.get?.('authorization') || '';
    if (!auth) return null;
    const parts = auth.split(' ');
    if (parts.length !== 2) return null;
    const [type, token] = parts;
    if (type !== 'Bearer') return null;
    return token;
}

export async function hashPassword(password: string) {
    return bcrypt.hash(password, 10);
}

export async function comparePassword(plain: string, hashed: string) {
    return bcrypt.compare(plain, hashed);
}

/**
 * Helper to require authentication inside route handlers. Returns the token payload
 * or `null` if unauthenticated. Optionally check for allowed roles.
 */
export function requireAuth(req: Request | NextRequest, allowedRoles?: string[]) {
    const token = getTokenFromHeader(req);
    const payload = verifyJwt(token || undefined);
    if (!payload) return null;
    if (allowedRoles && !allowedRoles.includes(payload.role)) return null;
    return payload;
}
