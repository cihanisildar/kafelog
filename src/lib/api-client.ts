import axios from "axios";

// Extend Axios config to include metadata
declare module 'axios' {
    export interface InternalAxiosRequestConfig {
        metadata?: { startTime: number };
    }
}

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor for logging and timing
apiClient.interceptors.request.use(
    (config) => {
        // Add timestamp to track request duration
        config.metadata = { startTime: Date.now() };
        console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for error handling and timing
apiClient.interceptors.response.use(
    (response) => {
        const duration = Date.now() - (response.config.metadata?.startTime || 0);
        console.log(`✅ API Response: ${response.config.url} - ${duration}ms`);

        if (duration > 1000) {
            console.warn(`⚠️ Slow API response: ${response.config.url} took ${duration}ms`);
        }

        return response;
    },
    (error) => {
        const duration = Date.now() - (error.config?.metadata?.startTime || 0);
        console.error(`❌ API Error: ${error.config?.url} - ${duration}ms`, error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default apiClient;
