"use client";

import { useQuery } from "@tanstack/react-query";
import { campaignsApi, CampaignFilters } from "@/lib/api/campaigns";

export function useCampaigns(filters?: CampaignFilters) {
    return useQuery({
        queryKey: ["campaigns", filters],
        queryFn: () => campaignsApi.getAll(filters),
        staleTime: 3 * 60 * 1000, // 3 minutes
    });
}

export function useCampaignById(id: string) {
    return useQuery({
        queryKey: ["campaigns", id],
        queryFn: () => campaignsApi.getById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
}

export function useBusinessCampaigns(
    businessId: string,
    filters?: Partial<CampaignFilters>
) {
    return useQuery({
        queryKey: ["campaigns", "business", businessId, filters],
        queryFn: () => campaignsApi.getByBusinessId(businessId, filters),
        enabled: !!businessId,
        staleTime: 3 * 60 * 1000,
    });
}
