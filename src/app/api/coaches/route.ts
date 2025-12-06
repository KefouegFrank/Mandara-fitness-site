import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';


/**
 * GET /api/coaches
 * Public endpoint to list all approved coaches with filtering.
 * Filtered by discipline, sorted by creation date.
 * No authentication required.
 */
export async function GET(req: Request) {
    const url = new URL(req.url);
    const discipline = url.searchParams.get('discipline') || undefined;
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 100);
    const offset = parseInt(url.searchParams.get('offset') || '0');

    try {
        const coaches = await prisma.coachProfile.findMany({
            where: {
                status: 'APPROVED',
                discipline: discipline ? { contains: discipline, mode: 'insensitive' } : undefined,
            },
            include: {
                user: { select: { id: true, name: true, email: true } },
                media: { take: 5 }, // Limit media to 5 items per coach
            },
            take: limit,
            skip: offset,
            orderBy: { createdAt: 'desc' },
        });

        const total = await prisma.coachProfile.count({
            where: {
                status: 'APPROVED',
                discipline: discipline ? { contains: discipline, mode: 'insensitive' } : undefined,
            },
        });

        return NextResponse.json({ success: true, coaches, total, limit, offset });
    } catch (err: unknown) {
        console.error('[GET /api/coaches]', err);
        return NextResponse.json({ success: false, error: { code: 'INTERNAL_ERROR' } }, { status: 500 });
    }
}
