import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/coaches/[coachId]
 * Public endpoint to fetch a specific coach profile.
 * Only shows approved coaches.
 */
export async function GET(req: Request, { params }: { params: { coachId: string } }) {
    const coachId = parseInt(params.coachId);
    if (isNaN(coachId)) return NextResponse.json({ success: false, error: { code: 'INVALID_INPUT' } }, { status: 400 });

    try {
        const coach = await prisma.coachProfile.findUnique({
            where: { id: coachId },
            include: {
                user: { select: { id: true, name: true, email: true } },
                media: true,
            },
        });

        if (!coach) return NextResponse.json({ success: false, error: { code: 'NOT_FOUND' } }, { status: 404 });

        // Only show approved coaches publicly
        if (coach.status !== 'APPROVED') {
            return NextResponse.json({ success: false, error: { code: 'NOT_FOUND' } }, { status: 404 });
        }

        return NextResponse.json({ success: true, coach });
    } catch (err: unknown) {
        console.error('[GET /api/coaches/:coachId]', err);
        return NextResponse.json({ success: false, error: { code: 'INTERNAL_ERROR' } }, { status: 500 });
    }
}
