"use client";

import { useQuery } from "@tanstack/react-query";
import { businessesApi, BusinessFilters, BusinessSearchFilters } from "@/lib/api/businesses";

export function useBusinesses(filters?: BusinessFilters) {
    return useQuery({
        queryKey: ["businesses", filters],
        queryFn: () => businessesApi.getAll(filters),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

export function useBusinessSearch(filters?: BusinessSearchFilters) {
    return useQuery({
        queryKey: ["businesses", "search", filters],
        queryFn: () => businessesApi.search(filters),
        enabled: !!filters?.search || !!filters?.city || !!filters?.tags,
        staleTime: 2 * 60 * 1000, // 2 minutes
    });
}

export function useBusinessById(id: string, include?: string[]) {
    return useQuery({
        queryKey: ["businesses", id, include],
        queryFn: () => businessesApi.getById(id, include),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}

export function useMyBusinesses() {
    return useQuery({
        queryKey: ["businesses", "my-businesses"],
        queryFn: () => businessesApi.getMyBusinesses(),
        staleTime: 5 * 60 * 1000,
    });
}
