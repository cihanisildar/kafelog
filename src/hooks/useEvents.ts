"use client";

import { useQuery } from "@tanstack/react-query";
import { eventsApi, EventFilters } from "@/lib/api/events";

export function useEvents(filters?: EventFilters) {
    return useQuery({
        queryKey: ["events", filters],
        queryFn: () => eventsApi.getAll(filters),
        staleTime: 3 * 60 * 1000, // 3 minutes
    });
}

export function useEventById(id: string) {
    return useQuery({
        queryKey: ["events", id],
        queryFn: () => eventsApi.getById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}

export function useBusinessEvents(
    businessId: string,
    filters?: Partial<EventFilters>
) {
    return useQuery({
        queryKey: ["events", "business", businessId, filters],
        queryFn: () => eventsApi.getByBusinessId(businessId, filters),
        enabled: !!businessId,
        staleTime: 3 * 60 * 1000,
    });
}
