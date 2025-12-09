import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from '@/lib/auth';
import { parseRequestBody, RegisterRequestSchema } from '@/lib/schemas';

export async function POST(req: Request) {
    // Validate request body using Zod schema
    const { data, error } = await parseRequestBody(req, RegisterRequestSchema);
    if (error) {
        return NextResponse.json({ success: false, error }, { status: 400 });
    }

    const { email, password, name } = data;

    // Check if user already exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
        return NextResponse.json({
            success: false,
            error: { code: 'ALREADY_EXISTS', message: 'Email already registered' }
        }, { status: 409 });
    }

    // Hash password and create user
    const hashed = await hashPassword(password);
    const user = await prisma.user.create({
        data: {
            email,
            password: hashed,
            role: 'PROSPECT', // Default role for new registrations
            name
        }
    });

    return NextResponse.json({ success: true, userId: user.id }, { status: 201 });
}
