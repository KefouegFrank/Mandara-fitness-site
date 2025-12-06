import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';


export async function POST(req: Request) {
    const body = await req.json();
    const payload = requireAuth(req, ['COACH']);
    if (!payload) return NextResponse.json({ success: false, error: { code: 'UNAUTHORIZED', message: 'Not authenticated' } }, { status: 401 });

    const { discipline, portfolio, bio } = body;
    if (!discipline) return NextResponse.json({ success: false, error: { code: 'INVALID_INPUT', message: 'Discipline required' } }, { status: 400 });

    const existing = await prisma.coachProfile.findUnique({ where: { userId: payload.userId } });
    if (existing) return NextResponse.json({ success: false, error: { code: 'ALREADY_EXISTS', message: 'Coach profile already exists' } }, { status: 409 });

    const coach = await prisma.coachProfile.create({ data: { userId: payload.userId, discipline, portfolio, bio } });
    return NextResponse.json({ success: true, coachId: coach.id });
}
