import axios from "axios";
import { createBrowserClient } from "@supabase/ssr";

const apiClientAuth = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
});

// Add auth token to requests
apiClientAuth.interceptors.request.use(
    async (config) => {
        try {
            const supabase = createBrowserClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL!,
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
            );
            const { data: { session }, error } = await supabase.auth.getSession();

            if (error) {
                console.error("Supabase auth error:", error);
            }

            if (session?.access_token) {
                config.headers.Authorization = `Bearer ${session.access_token}`;
                console.log("✅ Authorization header added to request");
            } else {
                console.warn("⚠️ No session found - request will be sent without auth token");
            }
        } catch (error) {
            console.error("Error getting session:", error);
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Error handling interceptor
apiClientAuth.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const status = error.response.status;
            const message = error.response?.data?.details?.message || error.response?.data?.error || error.message;

            console.error(`❌ API Error [${status}]:`, message);
            console.error("Full error response:", error.response.data);

            if (status === 401) {
                console.error("🔒 Authentication failed - Token may be invalid or expired");
            }
        } else {
            console.error("❌ Network/Request Error:", error.message);
        }
        return Promise.reject(error);
    }
);

export default apiClientAuth;
