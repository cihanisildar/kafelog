# Next.js Development Best Practices & Rules

This document outlines essential best practices, security guidelines, and performance optimizations for building robust Next.js applications.

---

## 🔒 Security Best Practices

### Environment Variables
- ✅ **NEVER** commit `.env` or `.env.local` files to version control
- ✅ Use `NEXT_PUBLIC_` prefix ONLY for client-side accessible variables
- ✅ Keep sensitive keys (API secrets, database URLs) without the `NEXT_PUBLIC_` prefix
- ✅ Validate and sanitize all environment variables at runtime

```typescript
// ✅ Good - Server-side only
const apiSecret = process.env.API_SECRET;

// ⚠️ Careful - Exposed to client
const publicKey = process.env.NEXT_PUBLIC_STRIPE_KEY;
```

### Authentication & Authorization
- ✅ Always validate sessions server-side in Server Components and middleware
- ✅ Use Supabase Auth's `createServerClient` in Server Components
- ✅ Never trust client-side authentication state alone
- ✅ Implement rate limiting on authentication endpoints (use your Node.js backend)
- ✅ Use HTTP-only cookies for session tokens (Supabase handles this)
- ✅ Always check Row Level Security (RLS) policies are enabled on Supabase tables

```typescript
// ✅ Good - Server Component with Supabase Auth
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) redirect("/login");
  // ...
}
```

### Input Validation
- ✅ Validate and sanitize ALL user inputs on both frontend and Node.js backend
- ✅ Use schema validation libraries (Zod, Yup) consistently
- ✅ Implement CSRF protection for form submissions
- ✅ Sanitize data before rendering to prevent XSS
- ✅ Leverage Supabase RLS policies as an additional security layer

```typescript
// ✅ Good - Using Zod for validation
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
});

export async function POST(req: Request) {
  const body = await req.json();
  const result = userSchema.safeParse(body);
  
  if (!result.success) {
    return Response.json({ error: result.error }, { status: 400 });
  }
  // Proceed with validated data
}
```

### SQL Injection Prevention
- ✅ Use Supabase client methods - they handle parameterization automatically
- ✅ If using raw SQL in your Node.js backend, ALWAYS use parameterized queries
- ✅ Never concatenate user input directly into SQL queries
- ✅ Enable Row Level Security (RLS) on all Supabase tables

```typescript
// ✅ Good - Supabase client (safe by default)
const { data, error } = await supabase
  .from("users")
  .select("*")
  .eq("id", userId);

// ✅ Good - If using raw SQL on Node.js backend
const { data } = await supabase.rpc("get_user", { user_id: userId });

// ❌ Bad - Never do this
const query = `SELECT * FROM users WHERE id = ${userId}`;
```

---

## 🚀 Performance Optimization

### Image Optimization
- ✅ ALWAYS use `next/image` component instead of `<img>`
- ✅ Specify `width` and `height` to prevent layout shift
- ✅ Use appropriate `priority` prop for above-the-fold images
- ✅ Leverage `placeholder="blur"` for better UX

```typescript
// ✅ Good
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Hero image"
  width={1200}
  height={600}
  priority
  placeholder="blur"
  blurDataURL="data:image/..."
/>

// ❌ Bad
<img src="/hero.jpg" alt="Hero" />
```

### Font Optimization
- ✅ Use `next/font` for automatic font optimization
- ✅ Prefer variable fonts when possible
- ✅ Subset fonts to include only needed characters

```typescript
// ✅ Good
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

### Code Splitting & Lazy Loading
- ✅ Use dynamic imports for large components
- ✅ Implement lazy loading for below-the-fold content
- ✅ Use `loading.tsx` for Suspense boundaries

```typescript
// ✅ Good - Dynamic import
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <Skeleton />,
  ssr: false, // if component doesn't need SSR
});
```

### Bundle Size
- ✅ Analyze bundle size regularly with `@next/bundle-analyzer`
- ✅ Avoid importing entire libraries when you only need parts
- ✅ Use tree-shakeable imports

```typescript
// ❌ Bad - Imports entire lodash
import _ from "lodash";

// ✅ Good - Tree-shakeable
import { debounce } from "lodash-es";
// or
import debounce from "lodash/debounce";
```

### Data Fetching
- ✅ Use Server Components for data fetching from your Node.js backend
- ✅ Implement `revalidate` for ISR when appropriate
- ✅ Use parallel data fetching where possible
- ✅ Implement proper error and loading states
- ✅ Use Supabase client in Server Components for direct database queries
- ✅ Call your Node.js backend API for complex business logic
- ✅ Use **Axios** as your HTTP client for consistent error handling and interceptors
- ✅ Use **TanStack Query (React Query)** for data fetching in Client Components

```typescript
// ✅ Good - Fetch from Node.js backend with Axios
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

export default async function Page() {
  try {
    const { data } = await apiClient.get("/api/data", {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    return <div>{/* render data */}</div>;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div>Error loading data</div>;
  }
}

// ✅ Good - Direct Supabase query in Server Component
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const { data: users } = await supabase.from("users").select("*");
  
  return <div>{/* render users */}</div>;
}

// ✅ Good - Parallel fetching
const [user, posts] = await Promise.all([
  fetchUser(),
  fetchPosts(),
]);
```

---

## ⚛️ React & Next.js Patterns

### 🚫 Avoid `useEffect` - There's Always a Better Way

Most `useEffect` usage indicates a pattern that can be better solved. Consider these alternatives:

#### ❌ Don't: Fetch data in useEffect
```typescript
// ❌ Bad
function Component() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`)
      .then(res => res.json())
      .then(setData);
  }, []);
  
  return <div>{data}</div>;
}
```

#### ✅ Do: Use Server Components
```typescript
// ✅ Good - Fetch from Node.js backend
async function Component() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`);
  const data = await res.json();
  return <div>{data}</div>;
}

// ✅ Good - Query Supabase directly
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function Component() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("items").select("*");
  return <div>{data}</div>;
}
```

#### ❌ Don't: Sync state in useEffect
```typescript
// ❌ Bad
const [fullName, setFullName] = useState("");

useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);
```

#### ✅ Do: Derive state during render
```typescript
// ✅ Good
const fullName = `${firstName} ${lastName}`;
```

#### ❌ Don't: Subscribe to external stores in useEffect
```typescript
// ❌ Bad
useEffect(() => {
  const handler = () => setCount(store.getCount());
  store.subscribe(handler);
  return () => store.unsubscribe(handler);
}, []);
```

#### ✅ Do: Use useSyncExternalStore
```typescript
// ✅ Good
import { useSyncExternalStore } from "react";

const count = useSyncExternalStore(
  store.subscribe,
  store.getCount,
  store.getServerSnapshot
);
```

#### When useEffect IS Appropriate:
- Connecting to external systems (analytics, chat widgets)
- Setting up event listeners on window/document
- Managing timers/intervals
- Imperative DOM operations (focus, scroll)

---

## 📘 TypeScript Best Practices

### 🚫 Never Use `any`
- ❌ `any` defeats the purpose of TypeScript
- ✅ Use `unknown` if type is truly unknown
- ✅ Use proper types or create interfaces
- ✅ Use generics for reusable components

```typescript
// ❌ Bad
function process(data: any) {
  return data.value;
}

// ✅ Good - Use unknown and type guards
function process(data: unknown) {
  if (typeof data === "object" && data !== null && "value" in data) {
    return (data as { value: string }).value;
  }
  throw new Error("Invalid data");
}

// ✅ Better - Use proper types
interface Data {
  value: string;
}

function process(data: Data) {
  return data.value;
}
```

### Type Safety
- ✅ Enable strict mode in `tsconfig.json`
- ✅ Use `strictNullChecks` to catch null/undefined errors
- ✅ Define return types for functions explicitly
- ✅ Use `satisfies` operator for type narrowing (TS 4.9+)

```typescript
// ✅ Good
const config = {
  endpoint: "/api/data",
  timeout: 5000,
} satisfies Config; // Ensures type while preserving literal types
```

### Prop Types
- ✅ Define interfaces for all component props
- ✅ Use `React.FC` sparingly (or avoid it)
- ✅ Export prop types for reusability

```typescript
// ✅ Good
interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ variant, children, onClick, disabled }: ButtonProps) {
  // ...
}
```

---

## 🏗️ Code Organization & Architecture

### File Structure
- ✅ Use the App Router (`app/` directory)
- ✅ Colocate related components with their routes
- ✅ Keep shared components in `components/`
- ✅ Organize by feature, not by type

```
app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
├── dashboard/
│   ├── components/       # Route-specific components
│   │   └── StatsCard.tsx
│   ├── page.tsx
│   └── layout.tsx
components/               # Shared components
├── ui/
│   ├── Button.tsx
│   └── Input.tsx
lib/
├── auth.ts
└── utils.ts
```

### Component Design
- ✅ Prefer Server Components by default
- ✅ Use Client Components only when needed (interactivity, hooks, browser APIs)
- ✅ Mark Client Components with `"use client"` directive
- ✅ Keep components small and focused (Single Responsibility)
- ✅ Extract reusable logic into custom hooks

```typescript
// ✅ Good - Server Component (default)
async function ProductList() {
  const products = await fetchProducts();
  return <div>{/* ... */}</div>;
}

// ✅ Good - Client Component when needed
"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### State Management
- ✅ Use URL state for shareable state (search params)
- ✅ Use Server Components for server state
- ✅ Use Context sparingly, prefer prop drilling for 2-3 levels
- ✅ Consider Zustand/Jotai for complex client state
- ✅ Use **TanStack Query (React Query)** for data fetching in Client Components (preferred)
- ✅ Use Supabase Realtime subscriptions for live data updates
- ✅ Leverage TanStack Query's built-in caching, refetching, and optimistic updates

```typescript
// ✅ Good - URL state
"use client";

import { useSearchParams, useRouter } from "next/navigation";

export function Filters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const category = searchParams.get("category") || "all";
  
  function setCategory(cat: string) {
    const params = new URLSearchParams(searchParams);
    params.set("category", cat);
    router.push(`?${params.toString()}`);
  }
  
  return <Select value={category} onChange={setCategory} />;
}

// ✅ Good - TanStack Query for data fetching in Client Component
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export function UsersList() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await apiClient.get("/api/users");
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>{/* render users */}</div>;
}

// ✅ Good - TanStack Query mutation with optimistic updates
export function UpdateUserButton({ userId }: { userId: string }) {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: async (name: string) => {
      const { data } = await apiClient.patch(`/api/users/${userId}`, { name });
      return data;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
  
  return (
    <button onClick={() => mutation.mutate("New Name")}>
      {mutation.isPending ? "Updating..." : "Update"}
    </button>
  );
}

// ✅ Good - Supabase Realtime in Client Component
"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export function RealtimeMessages() {
  const [messages, setMessages] = useState([]);
  const supabase = createClientComponentClient();
  
  useEffect(() => {
    // This is a valid useEffect use case - subscribing to external system
    const channel = supabase
      .channel("messages")
      .on("postgres_changes", 
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => setMessages(prev => [...prev, payload.new])
      )
      .subscribe();
    
    return () => { supabase.removeChannel(channel); };
  }, [supabase]);
  
  return <div>{/* render messages */}</div>;
}
```

---

## 🎨 Styling Best Practices

### CSS Modules
- ✅ Use CSS Modules for component-scoped styles
- ✅ Use consistent naming (camelCase for classes)
- ✅ Avoid global styles except for resets/variables

### Tailwind CSS (if used)
- ✅ Configure content paths properly in `tailwind.config.js`
- ✅ Use `@apply` sparingly (prefer utility classes)
- ✅ Extract common patterns into components, not `@apply`
- ✅ Use design tokens (theme colors, spacing) for consistency

### Performance
- ✅ Avoid inline styles (they prevent optimization)
- ✅ Use CSS variables for dynamic theming
- ✅ Minimize CSS bundle size

---

## 🧪 Testing & Quality

### Testing Strategy
- ✅ Write tests for critical business logic
- ✅ Test user interactions, not implementation details
- ✅ Use Playwright/Cypress for E2E tests
- ✅ Use Jest + React Testing Library for component tests
- ✅ Test Supabase RLS policies separately

### Code Quality
- ✅ Use ESLint with Next.js config
- ✅ Use Prettier for consistent formatting
- ✅ Run type checking in CI/CD (`tsc --noEmit`)
- ✅ Use Husky for pre-commit hooks

```json
// package.json
{
  "scripts": {
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:e2e": "playwright test"
  }
}
```

---

## 🔄 Frontend API Integration & Server Actions

### HTTP Client Setup with Axios
- ✅ Use **Axios** as your HTTP client library for consistent API calls
- ✅ Create Axios instances with base configuration
- ✅ Use interceptors for authentication, error handling, and logging
- ✅ Type your API responses with TypeScript

```typescript
// lib/api-client.ts - Server-side Axios instance
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
```

```typescript
// lib/api-client-auth.ts - Client-side Axios instance with auth
import axios from "axios";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const apiClientAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

// Add auth token to requests
apiClientAuth.interceptors.request.use(
  async (config) => {
    const supabase = createClientComponentClient();
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session?.access_token) {
      config.headers.Authorization = `Bearer ${session.access_token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClientAuth;
```

### Calling Node.js Backend
- ✅ Use Server Components to call your Node.js API (keeps API keys secret)
- ✅ Use Axios instances with proper configuration
- ✅ Use environment variables for API base URL
- ✅ Return proper HTTP status codes from your backend
- ✅ Implement error handling on both frontend and backend
- ✅ Pass authentication tokens from Supabase to your backend when needed

```typescript
// Server Component calling Node.js backend with Axios
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import axios from "axios";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  
  const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.access_token}`,
    },
  });
  
  try {
    const { data: users } = await apiClient.get("/api/users");
    return <div>{/* render users */}</div>;
  } catch (error) {
    console.error("Error fetching users:", error);
    return <div>Error loading users</div>;
  }
}
```

### Server Actions with Supabase
- ✅ Use Server Actions for mutations directly with Supabase
- ✅ Always revalidate or redirect after mutations
- ✅ Validate user permissions before mutations
- ✅ Return typed results

```typescript
// actions/user.ts
"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateUser(formData: FormData) {
  const supabase = createServerActionClient({ cookies });
  const name = formData.get("name") as string;
  
  // Verify authentication
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error("Unauthorized");
  
  // Update user
  const { error } = await supabase
    .from("users")
    .update({ name })
    .eq("id", session.user.id);
  
  if (error) throw error;
  
  revalidatePath("/profile");
  redirect("/profile");
}

// Or call your Node.js backend for complex logic with Axios
export async function complexOperation(data: FormData) {
  const supabase = createServerActionClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  
  const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session?.access_token}`,
    },
  });
  
  try {
    await apiClient.post("/api/complex", Object.fromEntries(data));
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Operation failed:", error);
    throw error;
  }
}
```

---

## 📦 Required Libraries & Setup

### TanStack Query (React Query) Setup
- ✅ Install: `npm install @tanstack/react-query`
- ✅ Set up QueryClientProvider in root layout
- ✅ Configure default options for caching and refetching
- ✅ Use React Query Devtools in development

```typescript
// app/providers.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
```

```typescript
// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### Axios Setup
- ✅ Install: `npm install axios`
- ✅ Create centralized API client instances
- ✅ Use interceptors for auth, logging, and error handling
- ✅ Type API responses with TypeScript interfaces

```typescript
// types/api.ts - Type your API responses
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}
```

```typescript
// lib/api.ts - Typed API functions
import apiClient from "./api-client";
import type { User, ApiResponse } from "@/types/api";

export const userApi = {
  getUsers: async () => {
    const { data } = await apiClient.get<ApiResponse<User[]>>("/api/users");
    return data.data;
  },
  
  getUserById: async (id: string) => {
    const { data } = await apiClient.get<ApiResponse<User>>(`/api/users/${id}`);
    return data.data;
  },
  
  updateUser: async (id: string, updates: Partial<User>) => {
    const { data } = await apiClient.patch<ApiResponse<User>>(
      `/api/users/${id}`,
      updates
    );
    return data.data;
  },
};
```

---

## 📊 Monitoring & Analytics

### Error Tracking
- ✅ Implement error boundaries for graceful failures
- ✅ Use error monitoring (Sentry, LogRocket)
- ✅ Log errors server-side with context
- ✅ Monitor Supabase logs for database errors
- ✅ Monitor your Node.js backend logs

### Performance Monitoring
- ✅ Monitor Core Web Vitals
- ✅ Use Next.js Analytics or alternatives
- ✅ Track custom metrics important to your app
- ✅ Monitor Supabase query performance
- ✅ Monitor Node.js backend API response times

---

## 🚦 Common Pitfalls to Avoid

### ❌ Don't
- Import Server Components in Client Components
- Use `useEffect` for data fetching
- Put heavy computations in render
- Forget to handle loading and error states
- Use `any` type in TypeScript
- Commit sensitive data or `.env` files to version control
- Skip input validation on both frontend and backend
- Ignore accessibility (a11y)
- Use outdated dependencies
- Over-optimize prematurely
- Expose Supabase anon key without RLS policies enabled
- Store sensitive data in localStorage or sessionStorage
- Make Supabase queries from Client Components without RLS protection

### ✅ Do
- Start with Server Components, add `"use client"` when needed
- Use proper TypeScript types everywhere
- Implement proper error handling on both frontend and backend
- Test on different devices and networks
- Keep dependencies updated (Next.js, Supabase, Node.js packages)
- Follow semantic HTML
- Use proper meta tags for SEO
- Implement accessibility features
- Monitor performance in production
- Document complex logic
- Enable Row Level Security (RLS) on ALL Supabase tables
- Use Server Components to call your Node.js backend (keeps secrets safe)
- Validate authentication tokens on your Node.js backend
- Use Supabase's built-in auth helpers for Next.js

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Web.dev - Performance](https://web.dev/performance)
- [OWASP Top 10](https://owasp.org/www-project-top-ten)

---

**Remember**: These rules exist to help you build maintainable, secure, and performant applications. When in doubt, prioritize user experience, security, and code clarity over cleverness.
