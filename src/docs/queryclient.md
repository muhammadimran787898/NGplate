# TanStack Query Optimization Guide

This project uses **TanStack Query v5** to manage server state. To ensure performance and avoid redundant API calls, follow these best practices.

## 1. Global Configuration

The `queryClient` is configured in `src/utils/queryClient.ts` with aggressive caching defaults:

```typescript
const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes: Data stays "fresh" for 5 mins
      gcTime: 1000 * 60 * 60 * 24, // 24 hours: Data remains in cache for 24 hours
      retry: 1,
      refetchOnWindowFocus: false, // Prevents re-calling API when switching tabs
    },
  },
};
```

## 2. Avoiding Unnecessary Calls

### Use `staleTime`
By setting a `staleTime`, you tell TanStack Query that the data is valid for X minutes. During this window, any component requesting this data will receive it from the cache instantly without hitting the network.

### Selective Refetching
Avoid `refetchOnMount: true` unless you absolutely need the latest data every time the component renders.

### Prefetching
Use `queryClient.prefetchQuery` in event handlers (like hovering over a link) to load data before the user even clicks.

## 3. Persistent Auth State
We combine **Redux Toolkit** with TanStack Query. 
- Use **Redux** for the "Who is the user?" (global identity).
- Use **TanStack Query** for "What is the user's data?" (server-side details).

## 4. Mutation Handling
After a successful `useMutation` (e.g., updating a profile), always use `queryClient.invalidateQueries` to mark related data as stale, ensuring the UI reflects the latest changes without a manual refresh.

```typescript
const mutation = useMutation({
  mutationFn: updateUser,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['user'] });
  },
});
```
