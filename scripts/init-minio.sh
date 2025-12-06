#!/bin/bash
# MinIO Bucket and User Setup Script
# 
# This script initializes MinIO with:
# 1. S3 buckets for Mandara Fitness
# 2. Application user with restricted permissions
# 3. Bucket policies for secure access
#
# Prerequisites:
# - MinIO server running and accessible
# - MinIO MC (minio/mc) client available
# - Root credentials
#
# Usage:
#   chmod +x init-minio.sh
#   ./init-minio.sh [minio_url] [root_user] [root_password] [app_user] [app_password]
#
# Example:
#   ./init-minio.sh https://minio.mandara-fitness.com minioadmin miniochangeme123 mandara-app mandara-secret

set -e

# Configuration
MINIO_URL=${1:-https://minio.mandara-fitness.com}
ROOT_USER=${2:-minioadmin}
ROOT_PASSWORD=${3:-miniochangeme123}
APP_USER=${4:-mandara-app}
APP_PASSWORD=${5:-mandara-app-secret-password}

BUCKET_NAME="mandara-media"
POLICY_NAME="mandara-app-policy"

echo "=========================================="
echo "MinIO Initialization Script"
echo "=========================================="
echo "MinIO URL: $MINIO_URL"
echo "Bucket: $BUCKET_NAME"
echo "App User: $APP_USER"
echo ""

# Configure MinIO alias
echo "[1/5] Configuring MinIO client..."
mc alias set minio "$MINIO_URL" "$ROOT_USER" "$ROOT_PASSWORD" --insecure 2>/dev/null || true

# Create bucket
echo "[2/5] Creating bucket '$BUCKET_NAME'..."
if mc ls "minio/$BUCKET_NAME" &>/dev/null; then
    echo "  ✓ Bucket already exists"
else
    mc mb "minio/$BUCKET_NAME"
    echo "  ✓ Bucket created"
fi

# Enable versioning for data protection
echo "[3/5] Enabling versioning on bucket..."
mc version enable "minio/$BUCKET_NAME"
echo "  ✓ Versioning enabled"

# Create application user
echo "[4/5] Creating application user '$APP_USER'..."
if mc admin user info minio "$APP_USER" &>/dev/null; then
    echo "  ✓ User already exists"
else
    mc admin user add minio "$APP_USER" "$APP_PASSWORD"
    echo "  ✓ User created"
fi

# Create and attach policy
echo "[5/5] Configuring access policy..."

# Policy: Allow mandara-app user to access only mandara-media bucket
POLICY_JSON=$(cat <<'EOF'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:GetObjectVersion",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::mandara-media/*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:ListBucketVersions"
      ],
      "Resource": "arn:aws:s3:::mandara-media"
    }
  ]
}
EOF
)

# Apply policy
echo "$POLICY_JSON" | mc admin policy create minio "$POLICY_NAME" /dev/stdin 2>/dev/null || true
mc admin policy attach minio "$POLICY_NAME" --user="$APP_USER"
echo "  ✓ Policy configured"

echo ""
echo "=========================================="
echo "✓ MinIO initialization complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Update your .env file with:"
echo "   AWS_S3_ENDPOINT=$MINIO_URL"
echo "   AWS_S3_REGION=us-east-1"
echo "   AWS_S3_BUCKET=$BUCKET_NAME"
echo "   AWS_ACCESS_KEY_ID=$APP_USER"
echo "   AWS_SECRET_ACCESS_KEY=$APP_PASSWORD"
echo ""
echo "2. Verify MinIO console: https://minio-console.mandara-fitness.com"
echo "   Login with: $ROOT_USER / $ROOT_PASSWORD"
echo ""
