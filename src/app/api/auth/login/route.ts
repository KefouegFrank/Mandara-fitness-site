import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { signJwt, comparePassword } from '@/lib/auth';

export async function POST(req: Request) {
    const { email, password } = await req.json();
    if (!email || !password) return NextResponse.json({ success: false, error: { code: 'INVALID_INPUT', message: 'Missing' } }, { status: 400 });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return NextResponse.json({ success: false, error: { code: 'NOT_FOUND', message: 'User not found' } }, { status: 404 });

    const ok = await comparePassword(password, user.password);
    if (!ok) return NextResponse.json({ success: false, error: { code: 'UNAUTHORIZED', message: 'Invalid credentials' } }, { status: 401 });

    const token = signJwt({ userId: user.id, role: user.role });
    return NextResponse.json({ success: true, token });
}
