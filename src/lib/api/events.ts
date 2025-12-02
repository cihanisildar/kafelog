import apiClient from "../api-client";
import type { ApiResponse, Event, PaginationInfo } from "@/types/api";

export interface EventListResponse {
    events: Event[];
    pagination: PaginationInfo;
}

export interface EventFilters {
    status?: "upcoming" | "ongoing" | "completed" | "cancelled";
    eventType?: string;
    isFree?: boolean;
    page?: number;
    limit?: number;
}

export const eventsApi = {
    // Get all events (no auth required)
    getAll: async (filters?: EventFilters) => {
        const { data } = await apiClient.get<ApiResponse<EventListResponse>>(
            "/api/events",
            { params: filters }
        );
        return data.data;
    },

    // Get event by ID (no auth required)
    getById: async (id: string) => {
        const { data } = await apiClient.get<ApiResponse<Event>>(
            `/api/events/${id}`
        );
        return data.data;
    },

    // Get events for a business (no auth required)
    getByBusinessId: async (businessId: string, filters?: Partial<EventFilters>) => {
        const { data } = await apiClient.get<ApiResponse<EventListResponse>>(
            `/api/events/business/${businessId}`,
            { params: filters }
        );
        return data.data;
    },
};
