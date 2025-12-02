import apiClient from "../api-client";
import type { ApiResponse, Campaign, PaginationInfo } from "@/types/api";

export interface CampaignListResponse {
    campaigns: Campaign[];
    pagination: PaginationInfo;
}

export interface CampaignFilters {
    status?: "DRAFT" | "ACTIVE" | "EXPIRED" | "CANCELLED";
    type?: "PROMOTION" | "EVENT" | "ANNOUNCEMENT";
    page?: number;
    limit?: number;
}

export const campaignsApi = {
    // Get all campaigns
    getAll: async (filters?: CampaignFilters) => {
        const { data } = await apiClient.get<ApiResponse<CampaignListResponse>>(
            "/api/campaigns",
            { params: filters }
        );
        return data.data;
    },

    // Get campaign by ID
    getById: async (id: string) => {
        const { data } = await apiClient.get<ApiResponse<Campaign>>(
            `/api/campaigns/${id}`
        );
        return data.data;
    },

    // Get campaigns for a business
    getByBusinessId: async (businessId: string, filters?: Partial<CampaignFilters>) => {
        const { data } = await apiClient.get<ApiResponse<CampaignListResponse>>(
            `/api/campaigns/business/${businessId}`,
            { params: filters }
        );
        return data.data;
    },
};
