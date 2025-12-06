import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from '@/lib/auth'

export async function POST(req: Request) {
    const body = await req.json();
    const { email, password, role = 'PROSPECT', name } = body;
    if (!email || !password) {
        return NextResponse.json({ success: false, error: { code: 'INVALID_INPUT', message: 'Email and password required' } }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return NextResponse.json({ success: false, error: { code: 'ALREADY_EXISTS', message: 'Email already registered' } }, { status: 409 });

    const hashed = await hashPassword(password);
    const user = await prisma.user.create({ data: { email, password: hashed, role, name } });

    return NextResponse.json({ success: true, userId: user.id });
}
