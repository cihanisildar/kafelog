# API Fetch Guide: Cafes, Campaigns & Events

This guide explains how to fetch cafes (businesses), campaigns, and events from the Kafelog API.

---

## Table of Contents

- [Authentication](#authentication)
- [Fetching Cafes (Businesses)](#fetching-cafes-businesses)
- [Fetching Campaigns](#fetching-campaigns)
- [Fetching Events](#fetching-events)
- [Response Format](#response-format)

---

## Authentication

> [!IMPORTANT]
> All API endpoints require authentication unless otherwise specified. Include the JWT token in the Authorization header:
>
> ```
> Authorization: Bearer YOUR_JWT_TOKEN
> ```

---

## Fetching Cafes (Businesses)

### 1. Get All Businesses

**Endpoint:** `GET /api/businesses`

**Description:** List all businesses with optional filtering and pagination.

**Query Parameters:**

| Parameter | Type | Values | Description |
|-----------|------|--------|-------------|
| `status` | string | `PENDING`, `APPROVED`, `REJECTED`, `SUSPENDED` | Filter by approval status |
| `page` | integer | ≥ 1 (default: 1) | Page number |
| `limit` | integer | 1-100 (default: 10) | Items per page |

**Example Request:**

```bash
GET /api/businesses?status=APPROVED&page=1&limit=10
```

**Example Response:**

```json
{
  "success": true,
  "message": "Businesses retrieved successfully",
  "data": {
    "businesses": [
      {
        "id": "biz_1234567890",
        "name": "Sıcacık Köşe Kafe",
        "description": "Mahalle kahvesi atmosferinde...",
        "addressObj": {
          "city": "İstanbul",
          "district": "Beşiktaş",
          "latitude": 41.0784,
          "longitude": 29.0136,
          "formattedAddress": "Nispetiye Cad. No:15, Beşiktaş/İstanbul"
        },
        "phone": "+90-216-555-0101",
        "amenities": ["WIFI", "PRIZ", "SESSIZ_ALAN"],
        "atmosphereTags": ["sıcacık", "sakin", "aile-dostu"],
        "status": "APPROVED",
        "averageRating": 4.5,
        "reviewCount": 27,
        "isOpenNow": true
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 48,
      "itemsPerPage": 10,
      "hasNextPage": true,
      "hasPreviousPage": false
    }
  }
}
```

---

### 2. Search Businesses

**Endpoint:** `GET /api/businesses/search`

**Description:** Advanced business search with multiple filters.

**Query Parameters:**

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `search` | string | Search term (name/description) | `"kafe wifi"` |
| `status` | string | Approval status filter | `"APPROVED"` |
| `city` | string | City filter | `"İstanbul"` |
| `tags` | string | Comma-separated atmosphere tags | `"sıcacık,sakin"` |
| `page` | integer | Page number (default: 1) | `1` |
| `limit` | integer | Items per page (default: 10) | `10` |

**Example Request:**

```bash
GET /api/businesses/search?search=wifi&city=İstanbul&status=APPROVED&page=1&limit=10
```

**Example Response:**

```json
{
  "success": true,
  "message": "Businesses retrieved successfully",
  "data": {
    "businesses": [...],
    "searchMetadata": {
      "query": "wifi",
      "totalResults": 23,
      "searchTime": 45.6,
      "filters": {
        "city": "İstanbul",
        "status": "APPROVED"
      }
    },
    "pagination": {...}
  }
}
```

---

### 3. Unified Business Search (Advanced)

**Endpoint:** `POST /api/search/businesses`

**Description:** Advanced search with location-based, AI-powered, and filtered results.

**Request Body:**

```json
{
  "query": "wifi çalışma dostu kafe",
  "location": {
    "latitude": 41.0082,
    "longitude": 28.9784,
    "radius": 5000
  },
  "filters": {
    "amenities": ["WIFI", "PRIZ"],
    "minRating": 4.0,
    "isOpenNow": true
  },
  "page": 1,
  "limit": 20
}
```

---

### 4. Get Business by ID

**Endpoint:** `GET /api/businesses/{id}`

**Description:** Get detailed information about a specific business.

**Query Parameters:**

| Parameter | Type | Values | Description |
|-----------|------|--------|-------------|
| `include` | array | `reviews`, `analytics`, `events`, `subscriptions` | Include related data |

**Example Request:**

```bash
GET /api/businesses/biz_1234567890?include=reviews,events
```

---

### 5. Get My Businesses

**Endpoint:** `GET /api/businesses/my-businesses`

**Description:** Get all businesses owned by the authenticated user.

**Authentication:** Required

**Example Request:**

```bash
GET /api/businesses/my-businesses
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## Fetching Campaigns

### 1. Get All Campaigns

**Endpoint:** `GET /api/campaigns`

**Description:** List all campaigns with filtering and pagination.

**Query Parameters:**

| Parameter | Type | Values | Description |
|-----------|------|--------|-------------|
| `status` | string | `DRAFT`, `ACTIVE`, `EXPIRED`, `CANCELLED` | Campaign status filter |
| `type` | string | `PROMOTION`, `EVENT`, `ANNOUNCEMENT` | Campaign type filter |
| `page` | integer | ≥ 1 (default: 1) | Page number |
| `limit` | integer | 1-50 (default: 10) | Items per page |

**Example Request:**

```bash
GET /api/campaigns?status=ACTIVE&type=PROMOTION&page=1&limit=10
Authorization: Bearer YOUR_JWT_TOKEN
```

**Example Response:**

```json
{
  "success": true,
  "message": "Campaigns retrieved successfully",
  "data": {
    "campaigns": [
      {
        "id": "camp_1234567890",
        "title": "Kış Sıcaklığı Özel İndirimi",
        "description": "Soğuk kış günlerinde %20 indirim",
        "campaignType": "PROMOTION",
        "status": "ACTIVE",
        "startDate": "2024-12-01T00:00:00Z",
        "endDate": "2024-02-28T23:59:59Z",
        "businessId": "biz_1234567890"
      }
    ],
    "pagination": {...}
  }
}
```

---

### 2. Search Campaigns

**Endpoint:** `GET /api/campaigns/search`

**Description:** Search campaigns with advanced filtering.

**Query Parameters:**

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `search` | string | Search term | `"kış indirimi"` |
| `type` | string | Campaign type | `"PROMOTION"` |
| `status` | string | Campaign status | `"ACTIVE"` |
| `businessId` | string | Filter by business | `"biz_123"` |
| `startDate` | date | Start date filter | `"2024-12-01"` |
| `endDate` | date | End date filter | `"2024-12-31"` |
| `page` | integer | Page number | `1` |
| `limit` | integer | Items per page | `10` |

**Example Request:**

```bash
GET /api/campaigns/search?search=indirim&status=ACTIVE&type=PROMOTION
Authorization: Bearer YOUR_JWT_TOKEN
```

---

### 3. Get Campaign by ID

**Endpoint:** `GET /api/campaigns/{id}`

**Description:** Get detailed information about a specific campaign.

**Example Request:**

```bash
GET /api/campaigns/camp_1234567890
Authorization: Bearer YOUR_JWT_TOKEN
```

---

### 4. Get Business Campaigns

**Endpoint:** `GET /api/campaigns/business/{businessId}`

**Description:** Get all campaigns for a specific business.

**Query Parameters:**

| Parameter | Type | Values | Description |
|-----------|------|--------|-------------|
| `status` | string | `DRAFT`, `ACTIVE`, `EXPIRED`, `CANCELLED` | Filter by status |
| `page` | integer | ≥ 1 | Page number |
| `limit` | integer | 1-50 | Items per page |

**Example Request:**

```bash
GET /api/campaigns/business/biz_1234567890?status=ACTIVE
Authorization: Bearer YOUR_JWT_TOKEN
```

---

### 5. Get Campaign Analytics

**Endpoint:** `GET /api/campaigns/{id}/analytics`

**Description:** Get performance analytics for a campaign (owner only).

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `days` | integer | Number of days of data (default: 30) |

**Example Request:**

```bash
GET /api/campaigns/camp_1234567890/analytics?days=7
Authorization: Bearer YOUR_JWT_TOKEN
```

**Example Response:**

```json
{
  "success": true,
  "data": {
    "campaign": {...},
    "analytics": {
      "totalViews": 2540,
      "totalClicks": 186,
      "engagement": 94,
      "conversion": 23,
      "clickRate": 7.32,
      "conversionRate": 12.37,
      "dailyMetrics": [...]
    }
  }
}
```

---

## Fetching Events

### 1. Get All Events

**Endpoint:** `GET /api/events`

**Description:** List all events with filtering and pagination.

**Query Parameters:**

| Parameter | Type | Values | Description |
|-----------|------|--------|-------------|
| `status` | string | `upcoming`, `ongoing`, `completed`, `cancelled` | Event status filter |
| `eventType` | string | Any event type | Event type filter |
| `isFree` | boolean | `true`, `false` | Free events only |
| `page` | integer | ≥ 1 (default: 1) | Page number |
| `limit` | integer | 1-50 (default: 10) | Items per page |

**Example Request:**

```bash
GET /api/events?status=upcoming&isFree=true&page=1&limit=10
Authorization: Bearer YOUR_JWT_TOKEN
```

**Example Response:**

```json
{
  "success": true,
  "message": "Events retrieved successfully",
  "data": {
    "events": [
      {
        "id": "evt_1234567890",
        "title": "Kahve Workshop'u",
        "description": "Uzman baristamızdan kahve demleme teknikleri",
        "eventType": "workshop",
        "eventDate": "2024-12-25T10:00:00Z",
        "durationMinutes": 120,
        "capacity": 15,
        "attendees": 8,
        "price": 150.00,
        "isFree": false,
        "status": "upcoming",
        "businessId": "biz_1234567890"
      }
    ],
    "pagination": {...}
  }
}
```

---

### 2. Search Events

**Endpoint:** `GET /api/events/search`

**Description:** Search events with advanced filtering.

**Query Parameters:**

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `search` | string | Search term | `"workshop"` |
| `eventType` | string | Event type filter | `"workshop"` |
| `businessId` | string | Filter by business | `"biz_123"` |
| `startDate` | datetime | Start date filter | `"2024-12-01T00:00:00Z"` |
| `endDate` | datetime | End date filter | `"2024-12-31T23:59:59Z"` |
| `status` | string | Event status | `"upcoming"` |
| `isFree` | boolean | Free events only | `true` |
| `page` | integer | Page number | `1` |
| `limit` | integer | Items per page | `10` |

**Example Request:**

```bash
GET /api/events/search?search=kahve&eventType=workshop&status=upcoming
Authorization: Bearer YOUR_JWT_TOKEN
```

---

### 3. Get Event by ID

**Endpoint:** `GET /api/events/{id}`

**Description:** Get detailed information about a specific event.

**Example Request:**

```bash
GET /api/events/evt_1234567890
Authorization: Bearer YOUR_JWT_TOKEN
```

---

### 4. Get Business Events

**Endpoint:** `GET /api/events/business/{businessId}`

**Description:** Get all events for a specific business.

**Query Parameters:**

| Parameter | Type | Values | Description |
|-----------|------|--------|-------------|
| `status` | string | `upcoming`, `ongoing`, `completed`, `cancelled` | Filter by status |

**Example Request:**

```bash
GET /api/events/business/biz_1234567890?status=upcoming
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## Response Format

### Success Response

All successful API responses follow this format:

```json
{
  "success": true,
  "message": "Descriptive success message",
  "data": {
    // Response data here
  }
}
```

### Error Response

All error responses follow this format:

```json
{
  "success": false,
  "error": "Error type",
  "details": {
    "message": "Detailed error description"
  }
}
```

### Pagination Object

```json
{
  "currentPage": 1,
  "totalPages": 5,
  "totalItems": 48,
  "itemsPerPage": 10,
  "hasNextPage": true,
  "hasPreviousPage": false
}
```

---

## Common HTTP Status Codes

| Status Code | Meaning | Description |
|-------------|---------|-------------|
| `200` | OK | Request successful |
| `201` | Created | Resource created successfully |
| `400` | Bad Request | Invalid parameters or data |
| `401` | Unauthorized | Authentication required or failed |
| `403` | Forbidden | Insufficient permissions |
| `404` | Not Found | Resource not found |
| `429` | Too Many Requests | Rate limit exceeded |
| `500` | Internal Server Error | Server error occurred |

---

## Best Practices

1. **Always include authentication**: Most endpoints require a valid JWT token
2. **Use pagination**: Limit results to avoid overwhelming responses
3. **Filter specifically**: Use status and type filters to get relevant data
4. **Handle errors gracefully**: Check the `success` field and handle `details` appropriately
5. **Respect rate limits**: Implement backoff strategies for repeated requests
6. **Cache when possible**: Cache static data like business details to reduce API calls

---

> [!TIP]
> For the most up-to-date API documentation and interactive testing, visit the Swagger UI at `/api-docs` when running the server locally.
