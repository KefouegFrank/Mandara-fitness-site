import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { signJwt, comparePassword } from '@/lib/auth';
import { parseRequestBody, LoginRequestSchema } from '@/lib/schemas';

export async function POST(req: Request) {
    // Validate request body using Zod schema
    const { data, error } = await parseRequestBody(req, LoginRequestSchema);
    if (error) {
        return NextResponse.json({ success: false, error }, { status: 400 });
    }

    const { email, password } = data;

    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return NextResponse.json({
            success: false,
            error: { code: 'UNAUTHORIZED', message: 'Invalid credentials' }
        }, { status: 401 });
    }

    // Verify password
    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
        return NextResponse.json({
            success: false,
            error: { code: 'UNAUTHORIZED', message: 'Invalid credentials' }
        }, { status: 401 });
    }

    // Generate JWT token
    const token = signJwt({ userId: user.id, role: user.role });
    return NextResponse.json({ success: true, token });
}
