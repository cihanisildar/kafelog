# Data Fetching Hooks - Usage Guide

This guide demonstrates how to use the TanStack Query hooks for fetching data from the backend API.

## Prerequisites

All hooks are already configured with:
- ✅ Authentication (auto-injected Supabase tokens)
- ✅ Error handling
- ✅ Loading states
- ✅ Caching with optimal stale times
- ✅ TypeScript typing

## Business Hooks

### useBusinesses - List all businesses

```typescript
"use client";

import { useBusinesses } from "@/hooks/useBusinesses";

export default function BusinessList() {
  const { data, isLoading, error } = useBusinesses({ 
    status: "APPROVED", 
    page: 1, 
    limit: 10 
  });

  if (isLoading) return <div>Loading businesses...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.businesses.map((business) => (
        <div key={business.id}>
          <h3>{business.name}</h3>
          <p>{business.description}</p>
          <p>Rating: {business.averageRating}/5</p>
        </div>
      ))}
      
      {/* Pagination info */}
      <p>Page {data?.pagination.currentPage} of {data?.pagination.totalPages}</p>
    </div>
  );
}
```

### useBusinessSearch - Search businesses

```typescript
"use client";

import { useBusinessSearch } from "@/hooks/useBusinesses";
import { useState } from "react";

export default function BusinessSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const { data, isLoading } = useBusinessSearch({ 
    search: searchTerm,
    city: "İstanbul",
    status: "APPROVED"
  });

  return (
    <div>
      <input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search businesses..."
      />
      
      {isLoading && <div>Searching...</div>}
      
      {data?.businesses.map((business) => (
        <div key={business.id}>{business.name}</div>
      ))}
    </div>
  );
}
```

### useBusinessById - Get single business

```typescript
"use client";

import { useBusinessById } from "@/hooks/useBusinesses";

export default function BusinessDetail({ id }: { id: string }) {
  const { data: business, isLoading } = useBusinessById(id, ["reviews", "events"]);

  if (isLoading) return <div>Loading...</div>;
  if (!business) return <div>Business not found</div>;

  return (
    <div>
      <h1>{business.name}</h1>
      <p>{business.description}</p>
      <p>Phone: {business.phone}</p>
      <p>Rating: {business.averageRating} ({business.reviewCount} reviews)</p>
    </div>
  );
}
```

### useMyBusinesses - Get authenticated user's businesses

```typescript
"use client";

import { useMyBusinesses } from "@/hooks/useBusinesses";

export default function MyBusinessesDashboard() {
  const { data: businesses, isLoading } = useMyBusinesses();

  if (isLoading) return <div>Loading your businesses...</div>;

  return (
    <div>
      <h2>My Businesses</h2>
      {businesses?.map((business) => (
        <div key={business.id}>
          <h3>{business.name}</h3>
          <span>Status: {business.status}</span>
        </div>
      ))}
    </div>
  );
}
```

## Campaign Hooks

### useCampaigns - List campaigns

```typescript
"use client";

import { useCampaigns } from "@/hooks/useCampaigns";

export default function CampaignsList() {
  const { data, isLoading } = useCampaigns({ 
    status: "ACTIVE",
    type: "PROMOTION",
    page: 1,
    limit: 10
  });

  if (isLoading) return <div>Loading campaigns...</div>;

  return (
    <div>
      {data?.campaigns.map((campaign) => (
        <div key={campaign.id}>
          <h3>{campaign.title}</h3>
          <p>{campaign.description}</p>
          <span>{campaign.campaignType}</span>
        </div>
      ))}
    </div>
  );
}
```

### useCampaignById - Get single campaign

```typescript
"use client";

import { useCampaignById } from "@/hooks/useCampaigns";

export default function CampaignDetail({ id }: { id: string }) {
  const { data: campaign, isLoading } = useCampaignById(id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{campaign?.title}</h1>
      <p>{campaign?.description}</p>
      <p>Status: {campaign?.status}</p>
    </div>
  );
}
```

### useBusinessCampaigns - Get campaigns for a business

```typescript
"use client";

import { useBusinessCampaigns } from "@/hooks/useCampaigns";

export default function BusinessCampaigns({ businessId }: { businessId: string }) {
  const { data, isLoading } = useBusinessCampaigns(businessId, { 
    status: "ACTIVE" 
  });

  if (isLoading) return <div>Loading campaigns...</div>;

  return (
    <div>
      <h2>Active Campaigns</h2>
      {data?.campaigns.map((campaign) => (
        <div key={campaign.id}>{campaign.title}</div>
      ))}
    </div>
  );
}
```

## Event Hooks

### useEvents - List events

```typescript
"use client";

import { useEvents } from "@/hooks/useEvents";

export default function EventsList() {
  const { data, isLoading } = useEvents({ 
    status: "upcoming",
    isFree: true,
    page: 1,
    limit: 10
  });

  if (isLoading) return <div>Loading events...</div>;

  return (
    <div>
      {data?.events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>Date: {new Date(event.eventDate).toLocaleDateString()}</p>
          <p>Price: {event.isFree ? "Free" : `₺${event.price}`}</p>
          <p>Capacity: {event.attendees}/{event.capacity}</p>
        </div>
      ))}
    </div>
  );
}
```

### useEventById - Get single event

```typescript
"use client";

import { useEventById } from "@/hooks/useEvents";

export default function EventDetail({ id }: { id: string }) {
  const { data: event, isLoading } = useEventById(id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{event?.title}</h1>
      <p>{event?.description}</p>
      <p>Type: {event?.eventType}</p>
      <p>Duration: {event?.durationMinutes} minutes</p>
    </div>
  );
}
```

### useBusinessEvents - Get events for a business

```typescript
"use client";

import { useBusinessEvents } from "@/hooks/useEvents";

export default function BusinessEvents({ businessId }: { businessId: string }) {
  const { data, isLoading } = useBusinessEvents(businessId, { 
    status: "upcoming" 
  });

  if (isLoading) return <div>Loading events...</div>;

  return (
    <div>
      <h2>Upcoming Events</h2>
      {data?.events.map((event) => (
        <div key={event.id}>{event.title}</div>
      ))}
    </div>
  );
}
```

## Advanced Usage

### Manual Refetch

```typescript
const { data, refetch } = useBusinesses({ status: "APPROVED" });

// Manually refetch data
const handleRefresh = () => {
  refetch();
};
```

### Conditional Fetching

```typescript
// Only fetch if ID exists
const { data } = useBusinessById(businessId, {
  enabled: !!businessId // This is built into the hook
});
```

### React Query DevTools

In development mode, you'll see the React Query DevTools in the bottom-right corner of your screen. This helps you:
- View all queries and their states
- See cached data
- Manually trigger refetches
- Debug query behavior

## Important Notes

1. **Authentication**: All hooks automatically inject your Supabase authentication token
2. **Caching**: Data is cached automatically with optimal stale times
3. **Error Handling**: All hooks return error states you can check
4. **Loading States**: Use `isLoading` for initial loads, `isFetching` for background updates
5. **Client Components**: All these hooks must be used in Client Components (`"use client"`)

## Best Practices

✅ **Use proper loading states**: Always handle `isLoading` and `error` states  
✅ **Leverage caching**: Let TanStack Query handle caching, don't store in state  
✅ **Filter on server**: Use filter params instead of filtering client-side  
✅ **Type safety**: All responses are fully typed via TypeScript  
✅ **Pagination**: Use pagination params for large datasets
