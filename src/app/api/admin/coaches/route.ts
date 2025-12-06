import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAuth } from '@/lib/auth';

/**
 * GET /api/admin/coaches
 * Fetch all coaches (paginated) with optional filters.
 * Only ADMIN can access.
 */
export async function GET(req: Request) {
    const payload = requireAuth(req, ['ADMIN']);
    if (!payload) return NextResponse.json({ success: false, error: { code: 'UNAUTHORIZED' } }, { status: 401 });

    const url = new URL(req.url);
    const status = url.searchParams.get('status') || undefined; // PENDING, APPROVED, REJECTED
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 100); // Cap at 100
    const offset = parseInt(url.searchParams.get('offset') || '0');

    try {
        const coaches = await prisma.coachProfile.findMany({
            where: status ? { status: status as any } : undefined,
            include: { user: { select: { id: true, email: true, name: true } }, media: true, adminReviews: true },
            take: limit,
            skip: offset,
            orderBy: { createdAt: 'desc' },
        });

        const total = await prisma.coachProfile.count({ where: status ? { status: status as any } : undefined });

        return NextResponse.json({ success: true, coaches, total, limit, offset });
    } catch (err) {
        console.error('[GET /api/admin/coaches]', err);
        return NextResponse.json({ success: false, error: { code: 'INTERNAL_ERROR' } }, { status: 500 });
    }
}
