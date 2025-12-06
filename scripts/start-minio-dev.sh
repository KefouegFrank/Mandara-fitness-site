#!/bin/bash
# Quick-start script for MinIO local development setup
# 
# This script:
# 1. Starts MinIO in Docker (single-node, for development)
# 2. Initializes buckets and users
# 3. Outputs environment variables needed for .env.local
#
# Usage: bash scripts/start-minio-dev.sh
# 
# Access:
# - MinIO API: http://localhost:9000
# - MinIO Console: http://localhost:9001

set -e

CONTAINER_NAME="mandara-minio-dev"
DATA_DIR="${PWD}/.minio-data"
PORT_API="9000"
PORT_CONSOLE="9001"

echo "=========================================="
echo "Mandara Fitness — MinIO Development Setup"
echo "=========================================="

# Check if Docker is running
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "   https://docs.docker.com/get-docker/"
    exit 1
fi

# Stop existing MinIO container if running
if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "Stopping existing MinIO container..."
    docker stop "$CONTAINER_NAME" 2>/dev/null || true
    docker rm "$CONTAINER_NAME" 2>/dev/null || true
fi

# Create data directory
mkdir -p "$DATA_DIR"

# Start MinIO
echo ""
echo "Starting MinIO..."
docker run -d \
    --name "$CONTAINER_NAME" \
    --rm \
    -p "${PORT_API}:9000" \
    -p "${PORT_CONSOLE}:9001" \
    -e "MINIO_ROOT_USER=minioadmin" \
    -e "MINIO_ROOT_PASSWORD=miniochangeme123" \
    -v "${DATA_DIR}:/minio-data" \
    minio/minio:latest \
    server /minio-data --console-address ":9001"

echo "✓ MinIO started"

# Wait for MinIO to be ready
echo ""
echo "Waiting for MinIO to be ready..."
for i in {1..30}; do
    if curl -s http://localhost:${PORT_API}/minio/health/live >/dev/null 2>&1; then
        echo "✓ MinIO is ready"
        break
    fi
    if [ $i -eq 30 ]; then
        echo "❌ MinIO failed to start"
        docker logs "$CONTAINER_NAME"
        exit 1
    fi
    echo -n "."
    sleep 1
done

# Check if MinIO client is installed
if ! command -v mc &> /dev/null; then
    echo ""
    echo "⚠️  MinIO client (mc) not found. Installing..."
    
    # Install MinIO client based on OS
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        curl https://dl.min.io/client/mc/release/linux-amd64/mc --create-dirs -o /usr/local/bin/mc
        chmod +x /usr/local/bin/mc
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        brew install minio/stable/mc 2>/dev/null || curl https://dl.min.io/client/mc/release/darwin-amd64/mc -o /usr/local/bin/mc
        chmod +x /usr/local/bin/mc
    else
        echo "⚠️  Please install MinIO client (mc) manually:"
        echo "   https://min.io/docs/minio/linux/reference/minio-mc.html"
    fi
fi

# Initialize bucket and user
echo ""
echo "Initializing buckets and users..."

# Configure alias
mc alias set minio-local http://localhost:${PORT_API} minioadmin miniochangeme123 --insecure 2>/dev/null || true

# Create bucket
if ! mc ls "minio-local/mandara-media" 2>/dev/null; then
    echo "Creating bucket: mandara-media"
    mc mb "minio-local/mandara-media"
    mc version enable "minio-local/mandara-media"
    echo "✓ Bucket created with versioning enabled"
else
    echo "✓ Bucket already exists"
fi

# Create application user
if ! mc admin user info minio-local mandara-app 2>/dev/null; then
    echo "Creating application user: mandara-app"
    mc admin user add minio-local mandara-app mandara-app-secret
    
    # Create policy
    POLICY_JSON=$(cat <<'EOF'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:*"],
      "Resource": ["arn:aws:s3:::mandara-media", "arn:aws:s3:::mandara-media/*"]
    }
  ]
}
EOF
)
    echo "$POLICY_JSON" | mc admin policy create minio-local mandara-app-policy /dev/stdin 2>/dev/null || true
    mc admin policy attach minio-local mandara-app-policy --user=mandara-app
    echo "✓ User created with bucket access policy"
else
    echo "✓ User already exists"
fi

# Output summary
echo ""
echo "=========================================="
echo "✓ MinIO Development Setup Complete!"
echo "=========================================="
echo ""
echo "Access MinIO:"
echo "  • MinIO API (S3 endpoint): http://localhost:${PORT_API}"
echo "  • MinIO Console (Web UI): http://localhost:${PORT_CONSOLE}"
echo "  • Root User: minioadmin"
echo "  • Root Password: miniochangeme123"
echo ""
echo "Update your .env.local:"
echo ""
cat <<EOF
# MinIO S3-Compatible Storage (Development)
AWS_S3_ENDPOINT=http://localhost:${PORT_API}
AWS_S3_REGION=us-east-1
AWS_S3_BUCKET=mandara-media
AWS_S3_FORCE_PATH_STYLE=true
AWS_ACCESS_KEY_ID=mandara-app
AWS_SECRET_ACCESS_KEY=mandara-app-secret
EOF

echo ""
echo "Next steps:"
echo "  1. Copy the environment variables above into your .env.local"
echo "  2. Run: npm run dev"
echo "  3. Test file uploads in the application"
echo "  4. View uploaded files at: http://localhost:${PORT_CONSOLE}/browser (login with minioadmin/miniochangeme123)"
echo ""
echo "To stop MinIO:"
echo "  docker stop $CONTAINER_NAME"
echo ""
