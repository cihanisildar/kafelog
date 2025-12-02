// Base response types
export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data: T;
    error?: string;
    details?: {
        message: string;
    };
}

// Pagination types
export interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

// Business types
export interface AddressObj {
    city: string;
    district: string;
    latitude: number;
    longitude: number;
    formattedAddress: string;
}

export interface Business {
    id: string;
    name: string;
    description: string;
    addressObj: AddressObj;
    phone: string;
    amenities: string[];
    atmosphereTags: string[];
    status: "PENDING" | "APPROVED" | "REJECTED" | "SUSPENDED";
    averageRating: number;
    reviewCount: number;
    isOpenNow: boolean;
}

// Campaign types
export interface Campaign {
    id: string;
    title: string;
    description: string;
    campaignType: "PROMOTION" | "EVENT" | "ANNOUNCEMENT";
    status: "DRAFT" | "ACTIVE" | "EXPIRED" | "CANCELLED";
    startDate: string;
    endDate: string;
    businessId: string;
}

// Event types
export interface Event {
    id: string;
    title: string;
    description: string;
    eventType: string;
    eventDate: string;
    durationMinutes: number;
    capacity: number;
    attendees: number;
    price: number;
    isFree: boolean;
    status: "upcoming" | "ongoing" | "completed" | "cancelled";
    businessId: string;
}
