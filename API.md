# Mandara Fitness API Documentation

## Overview

The Mandara Fitness API is a RESTful API built with Next.js 16 and provides endpoints for managing coaches, clients, chat, and media uploads. All requests must include proper authentication using JWT tokens.

### Base URL
- **Development:** `http://localhost:3000/api`
- **Production:** `https://api.mandara-fitness.com/api`

### Authentication

All API endpoints (except `/auth/login` and `/auth/register`) require authentication using a JWT token in the `Authorization` header:

```
Authorization: Bearer <jwt_token>
```

---

## Authentication Endpoints

### POST /api/auth/login

Log in with email and password to obtain a JWT token.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123"
}
```

**Response (200):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response (401):**
```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid credentials"
  }
}
```

**Rate Limit:** 5 requests per 15 minutes per IP

---

### POST /api/auth/register

Create a new user account.

**Request:**
```json
{
  "email": "newuser@example.com",
  "password": "SecurePassword123",
  "name": "John Doe"
}
```

**Validation Rules:**
- Email: Valid email format
- Password: Minimum 8 characters, at least one uppercase, one lowercase, one digit
- Name: Optional, minimum 2 characters

**Response (201):**
```json
{
  "success": true,
  "message": "User created successfully",
  "userId": 123
}
```

**Response (400):**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data"
  }
}
```

**Rate Limit:** 5 requests per 15 minutes per IP

---

## Profile Endpoints

### GET /api/profile

Get the authenticated user's profile information.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "user": {
    "id": 123,
    "email": "user@example.com",
    "name": "John Doe",
    "role": "COACH",
    "createdAt": "2025-01-15T10:30:00Z"
  },
  "profile": {
    "bio": "Certified fitness coach",
    "discipline": "Strength Training",
    "status": "APPROVED"
  }
}
```

**Response (401):**
```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing token"
  }
}
```

---

### PUT /api/profile

Update the authenticated user's profile.

**Request:**
```json
{
  "name": "John Doe Updated",
  "ageRange": "25-34",
  "heightCm": 180,
  "weightKg": 75
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Profile updated successfully"
}
```

---

## Coach Endpoints

### POST /api/coach/onboarding

Submit coach onboarding information (requires PROSPECT role).

**Request:**
```json
{
  "bio": "I am a certified strength and conditioning coach",
  "discipline": "Strength Training",
  "portfolio": "https://portfolio.example.com"
}
```

**Response (201):**
```json
{
  "success": true,
  "coachProfile": {
    "id": 456,
    "status": "PENDING",
    "createdAt": "2025-01-15T10:30:00Z"
  }
}
```

---

### GET /api/coaches

Get list of approved coaches.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)
- `discipline` (optional): Filter by discipline

**Response (200):**
```json
{
  "success": true,
  "coaches": [
    {
      "id": 1,
      "userId": 123,
      "name": "Jane Smith",
      "discipline": "Yoga",
      "bio": "Professional yoga instructor",
      "status": "APPROVED"
    }
  ],
  "total": 15,
  "page": 1,
  "pages": 1
}
```

---

### GET /api/coaches/:coachId

Get detailed information about a specific coach.

**Parameters:**
- `coachId` (path): Coach profile ID

**Response (200):**
```json
{
  "success": true,
  "coach": {
    "id": 1,
    "userId": 123,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "discipline": "Yoga",
    "bio": "Professional yoga instructor",
    "portfolio": "https://portfolio.example.com",
    "status": "APPROVED",
    "media": [
      {
        "id": 789,
        "type": "CERTIFICATE",
        "url": "https://s3.example.com/cert.pdf",
        "mimeType": "application/pdf"
      }
    ]
  }
}
```

---

## Admin Endpoints

All admin endpoints require `role: "ADMIN"`

### GET /api/admin/coaches/pending

Get list of coaches pending approval.

**Response (200):**
```json
{
  "success": true,
  "pendingCoaches": [
    {
      "id": 2,
      "userId": 124,
      "name": "Bob Johnson",
      "discipline": "CrossFit",
      "bio": "CrossFit Level 2 Coach",
      "status": "PENDING",
      "appliedAt": "2025-01-14T15:22:00Z"
    }
  ]
}
```

---

### POST /api/admin/coaches/:coachId/approve

Approve a coach application.

**Parameters:**
- `coachId` (path): Coach profile ID

**Response (200):**
```json
{
  "success": true,
  "message": "Coach approved successfully"
}
```

---

### POST /api/admin/coaches/:coachId/reject

Reject a coach application.

**Request:**
```json
{
  "reason": "Portfolio does not meet requirements"
}
```

**Parameters:**
- `coachId` (path): Coach profile ID

**Response (200):**
```json
{
  "success": true,
  "message": "Coach rejected successfully"
}
```

---

## Chat Endpoints

### POST /api/chat

Create a new chat between coach and client (requires COACH or PROSPECT role).

**Request:**
```json
{
  "coachId": 1,
  "clientId": 5
}
```

**Response (201):**
```json
{
  "success": true,
  "chat": {
    "id": 10,
    "coachId": 1,
    "clientId": 5,
    "createdAt": "2025-01-15T10:30:00Z"
  }
}
```

---

### POST /api/chat/:chatId/messages

Send a message in a chat.

**Request:**
```json
{
  "content": "Hi! I'm interested in your coaching services."
}
```

**Validation Rules:**
- Content: 1-5000 characters required

**Response (201):**
```json
{
  "success": true,
  "message": {
    "id": 42,
    "chatId": 10,
    "senderId": 5,
    "content": "Hi! I'm interested in your coaching services.",
    "isRead": false,
    "createdAt": "2025-01-15T10:35:00Z"
  }
}
```

---

### GET /api/chat/:chatId/messages

Get messages from a specific chat.

**Query Parameters:**
- `limit` (optional): Number of messages (default: 50, max: 100)
- `offset` (optional): Number of messages to skip (default: 0)

**Response (200):**
```json
{
  "success": true,
  "messages": [
    {
      "id": 42,
      "chatId": 10,
      "senderId": 5,
      "senderName": "John Doe",
      "content": "Hi! I'm interested in your coaching services.",
      "isRead": true,
      "createdAt": "2025-01-15T10:35:00Z"
    }
  ],
  "total": 5
}
```

---

## Media / File Upload Endpoints

### POST /api/coach/media/presigned-url

Get a presigned URL to upload a file directly to S3.

**Request:**
```json
{
  "fileName": "coaching-certificate.pdf",
  "mimeType": "application/pdf",
  "fileSize": 2048000
}
```

**Validation Rules:**
- fileName: Required
- mimeType: Must be one of: `application/pdf`, `image/jpeg`, `image/png`, `image/webp`, `video/mp4`, `video/quicktime`
- fileSize: Maximum 50MB (52,428,800 bytes)

**Response (200):**
```json
{
  "success": true,
  "presignedUrl": "https://s3.amazonaws.com/mandara-media?...",
  "fileKey": "coaches/coach-123/coaching-certificate-abc123.pdf",
  "expiresIn": 3600
}
```

**Response (400):**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "File size cannot exceed 50MB"
  }
}
```

---

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message"
  }
}
```

### Common Error Codes

| Code | Status | Description |
|------|--------|-------------|
| UNAUTHORIZED | 401 | Missing or invalid authentication token |
| FORBIDDEN | 403 | Authenticated but not authorized for this resource |
| NOT_FOUND | 404 | Resource not found |
| VALIDATION_ERROR | 400 | Invalid input data |
| RATE_LIMIT_EXCEEDED | 429 | Too many requests from this IP |
| INTERNAL_ERROR | 500 | Server error |

---

## Rate Limiting

Rate limits are applied per IP address:

- **Authentication endpoints:** 5 requests per 15 minutes
- **General API endpoints:** 100 requests per 15 minutes

The rate limit status is included in the response headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1705337400
```

---

## Pagination

List endpoints support pagination with query parameters:

- `page` (default: 1)
- `limit` (default: 20, max: 100)

Example:
```
GET /api/coaches?page=2&limit=50
```

---

## Timestamps

All timestamps are in ISO 8601 format with UTC timezone:
```
2025-01-15T10:30:00Z
```

---

## Testing

### Using cURL

```bash
# Register a new user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPassword123",
    "name": "Test User"
  }'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPassword123"
  }'

# Get profile (use token from login response)
curl -X GET http://localhost:3000/api/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Using Postman

1. Import the API endpoints into Postman
2. Create a variable `baseUrl` set to `http://localhost:3000/api`
3. Create a variable `token` for storing JWT tokens
4. Use the pre-request scripts to handle authentication flow

---

## SDK / Client Libraries

Coming soon: JavaScript/TypeScript SDK for easier integration.

---

## Support

For issues or questions, please contact: `support@mandara-fitness.com`
