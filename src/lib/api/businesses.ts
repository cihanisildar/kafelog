import apiClientAuth from "../api-client-auth";
import type { ApiResponse, Business, PaginationInfo } from "@/types/api";

export interface BusinessListResponse {
    businesses: Business[];
    pagination: PaginationInfo;
}

export interface BusinessFilters {
    status?: "PENDING" | "APPROVED" | "REJECTED" | "SUSPENDED";
    page?: number;
    limit?: number;
}

export interface BusinessSearchFilters extends BusinessFilters {
    search?: string;
    city?: string;
    tags?: string;
}

export const businessesApi = {
    // Get all businesses
    getAll: async (filters?: BusinessFilters) => {
        const { data } = await apiClientAuth.get<ApiResponse<BusinessListResponse>>(
            "/api/businesses",
            { params: filters }
        );
        return data.data;
    },

    // Search businesses
    search: async (filters?: BusinessSearchFilters) => {
        const { data } = await apiClientAuth.get<ApiResponse<BusinessListResponse>>(
            "/api/businesses/search",
            { params: filters }
        );
        return data.data;
    },

    // Get business by ID
    getById: async (id: string, include?: string[]) => {
        const { data } = await apiClientAuth.get<ApiResponse<Business>>(
            `/api/businesses/${id}`,
            { params: { include: include?.join(",") } }
        );
        return data.data;
    },

    // Get my businesses
    getMyBusinesses: async () => {
        const { data } = await apiClientAuth.get<ApiResponse<{ businesses: Business[] }>>(
            "/api/businesses/my-businesses"
        );
        return data.data.businesses;
    },
};
