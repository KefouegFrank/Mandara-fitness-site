import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

/**
 * POST /api/admin/coaches/:coachId/reject
 * Admin endpoint to reject a coach profile.
 * Requires a rejection reason in the body.
 * Creates an AdminReview record for audit trail.
 */
export async function POST(req: Request, { params }: { params: { coachId: string } }) {
    const payload = requireAuth(req, ['ADMIN']);
    if (!payload) return NextResponse.json({ success: false, error: { code: 'UNAUTHORIZED' } }, { status: 401 });

    const coachId = parseInt(params.coachId);
    if (isNaN(coachId)) return NextResponse.json({ success: false, error: { code: 'INVALID_INPUT' } }, { status: 400 });

    const { reason } = await req.json();
    if (!reason) return NextResponse.json({ success: false, error: { code: 'INVALID_INPUT', message: 'Rejection reason required' } }, { status: 400 });

    try {
        const coach = await prisma.coachProfile.findUnique({ where: { id: coachId } });
        if (!coach) return NextResponse.json({ success: false, error: { code: 'NOT_FOUND' } }, { status: 404 });

        // Update coach status to REJECTED and store the reason
        const updated = await prisma.coachProfile.update({
            where: { id: coachId },
            data: { status: 'REJECTED', statusReason: reason },
        });

        // Create audit record
        await prisma.adminReview.create({
            data: {
                coachId,
                adminId: payload.userId,
                action: 'REJECTED',
                comment: reason,
            },
        });

        return NextResponse.json({ success: true, coach: updated });
    } catch (err) {
        console.error('[POST /api/admin/coaches/:coachId/reject]', err);
        return NextResponse.json({ success: false, error: { code: 'INTERNAL_ERROR' } }, { status: 500 });
    }
}
