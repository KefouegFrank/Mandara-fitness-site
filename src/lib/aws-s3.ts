/**
 * src/lib/aws-s3.ts
 * AWS S3 utilities for presigned URLs and object storage.
 * Handles secure file uploads for media (certificates, images, videos).
 * Supports both AWS S3 and S3-compatible services (MinIO, Spaces, etc).
 */

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
    region: process.env.AWS_S3_REGION || process.env.AWS_REGION || 'us-east-1',
    ...(process.env.AWS_S3_ENDPOINT && { endpoint: process.env.AWS_S3_ENDPOINT }), // For MinIO/Spaces
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
    forcePathStyle: process.env.AWS_S3_FORCE_PATH_STYLE === 'true' || !!process.env.AWS_S3_ENDPOINT, // Required for MinIO
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET || '';
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

// Allowed MIME types and their corresponding MediaType enum values
const ALLOWED_TYPES: Record<string, string> = {
    'application/pdf': 'CERTIFICATE',
    'image/jpeg': 'IMAGE',
    'image/png': 'IMAGE',
    'image/webp': 'IMAGE',
    'video/mp4': 'VIDEO',
    'video/quicktime': 'VIDEO',
};

export interface PresignedUrlResponse {
    url: string;
    key: string;
    expiresIn: number;
}

/**
 * Generate a presigned URL for S3 upload.
 * Validates file type and provides a time-limited URL for secure client uploads.
 * @param fileName - Original file name
 * @param mimeType - MIME type of the file
 * @param coachId - Coach ID (for organizing uploads)
 * @returns Object containing presigned URL, key, and expiration
 */
export async function generatePresignedUrl(
    fileName: string,
    mimeType: string,
    coachId: number,
    fileSize: number
): Promise<PresignedUrlResponse> {
    // Validate file type
    if (!ALLOWED_TYPES[mimeType]) {
        throw new Error(`MIME type ${mimeType} not allowed`);
    }

    // Validate file size
    if (fileSize > MAX_FILE_SIZE) {
        throw new Error(`File size exceeds limit of ${MAX_FILE_SIZE / 1024 / 1024}MB`);
    }

    // Validate bucket is configured
    if (!BUCKET_NAME) {
        throw new Error('AWS_S3_BUCKET not configured');
    }

    // Generate a unique key: /coaches/{coachId}/{timestamp}-{fileName}
    const timestamp = Date.now();
    const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    const key = `coaches/${coachId}/${timestamp}-${sanitizedFileName}`;

    // Create presigned URL command
    const command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
        ContentType: mimeType,
    });

    // Generate URL valid for 1 hour (3600 seconds)
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

    return { url, key, expiresIn: 3600 };
}

/**
 * Get the public URL for a media file stored in S3.
 * Assumes files are public or use CloudFront distribution.
 * @param key - S3 object key
 * @returns Full URL to the object
 */
export function getPublicUrl(key: string): string {
    // If a custom endpoint (MinIO) is configured, use it as the base URL.
    const endpoint = process.env.AWS_S3_ENDPOINT;
    if (endpoint) {
        const base = endpoint.replace(/\/$/, '');
        return `${base}/${key}`;
    }

    const cdnUrl = process.env.AWS_S3_CDN_URL || `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`;
    return `${cdnUrl}/${key}`;
}
