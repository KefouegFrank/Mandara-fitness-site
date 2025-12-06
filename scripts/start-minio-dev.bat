@echo off
REM Quick-start script for MinIO local development setup (Windows)
REM 
REM This script:
REM 1. Starts MinIO in Docker (single-node, for development)
REM 2. Initializes buckets and users
REM 3. Outputs environment variables needed for .env.local
REM
REM Usage: start-minio-dev.bat
REM 
REM Access:
REM - MinIO API: http://localhost:9000
REM - MinIO Console: http://localhost:9001

setlocal enabledelayedexpansion

set CONTAINER_NAME=mandara-minio-dev
set PORT_API=9000
set PORT_CONSOLE=9001
set DATA_DIR=%CD%\.minio-data

echo.
echo ==========================================
echo Mandara Fitness - MinIO Development Setup
echo ==========================================
echo.

REM Check if Docker is running
docker ps >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Docker is not running. Please start Docker Desktop.
    pause
    exit /b 1
)

REM Stop existing MinIO container if running
for /f "tokens=*" %%i in ('docker ps -a --format "{{.Names}}" 2^>nul ^| find /i "%CONTAINER_NAME%"') do (
    echo Stopping existing MinIO container...
    docker stop %CONTAINER_NAME% >nul 2>&1
    docker rm %CONTAINER_NAME% >nul 2>&1
)

REM Create data directory
if not exist "%DATA_DIR%" mkdir "%DATA_DIR%"

REM Start MinIO
echo.
echo Starting MinIO...
docker run -d ^
    --name %CONTAINER_NAME% ^
    --rm ^
    -p %PORT_API%:9000 ^
    -p %PORT_CONSOLE%:9001 ^
    -e MINIO_ROOT_USER=minioadmin ^
    -e MINIO_ROOT_PASSWORD=miniochangeme123 ^
    -v "%DATA_DIR%:/minio-data" ^
    minio/minio:latest ^
    server /minio-data --console-address ":9001"

if %errorlevel% neq 0 (
    echo Error: Failed to start MinIO
    pause
    exit /b 1
)

echo MinIO started successfully
echo.
echo Waiting for MinIO to be ready...

REM Wait for MinIO to be ready
setlocal enabledelayedexpansion
set /a counter=0
:wait_loop
timeout /t 1 /nobreak >nul
set /a counter+=1

if %counter% gtr 30 (
    echo Error: MinIO failed to start
    docker logs %CONTAINER_NAME%
    pause
    exit /b 1
)

for /f %%i in ('curl -s http://localhost:%PORT_API%/minio/health/live 2^>nul') do (
    if "%%i"=="ok" (
        echo MinIO is ready
        goto ready
    )
)

echo Attempt %counter%/30: Waiting for MinIO...
goto wait_loop

:ready
echo.
echo ==========================================
echo MinIO Development Setup Complete!
echo ==========================================
echo.
echo Access MinIO:
echo   * MinIO API (S3 endpoint): http://localhost:%PORT_API%
echo   * MinIO Console (Web UI): http://localhost:%PORT_CONSOLE%
echo   * Root User: minioadmin
echo   * Root Password: miniochangeme123
echo.
echo Update your .env.local:
echo.
echo AWS_S3_ENDPOINT=http://localhost:%PORT_API%
echo AWS_S3_REGION=us-east-1
echo AWS_S3_BUCKET=mandara-media
echo AWS_S3_FORCE_PATH_STYLE=true
echo AWS_ACCESS_KEY_ID=mandara-app
echo AWS_SECRET_ACCESS_KEY=mandara-app-secret
echo.
echo Note: Automatic bucket/user initialization requires MinIO client (mc).
echo Install from: https://min.io/docs/minio/linux/reference/minio-mc.html
echo.
echo Next steps:
echo   1. Copy the environment variables above into your .env.local
echo   2. Run: npm run dev
echo   3. Test file uploads in the application
echo   4. View files at: http://localhost:%PORT_CONSOLE%/browser
echo.
echo To stop MinIO:
echo   docker stop %CONTAINER_NAME%
echo.
pause
