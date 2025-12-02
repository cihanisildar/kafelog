"use client";

import { useAuth } from "@/contexts/AuthContext";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export function AuthDebug() {
  const { user, loading } = useAuth();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const getToken = async () => {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      setToken(session?.access_token || null);
    };
    getToken();
  }, [user]);

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm z-50 text-xs">
      <div className="font-bold mb-2">🔍 Auth Debug Info</div>
      <div className="space-y-1">
        <div>
          <span className="text-gray-400">Loading:</span>{" "}
          <span className={loading ? "text-yellow-400" : "text-green-400"}>
            {loading ? "Yes" : "No"}
          </span>
        </div>
        <div>
          <span className="text-gray-400">User:</span>{" "}
          <span className={user ? "text-green-400" : "text-red-400"}>
            {user ? user.email : "Not logged in"}
          </span>
        </div>
        <div>
          <span className="text-gray-400">Token:</span>{" "}
          <span className={token ? "text-green-400" : "text-red-400"}>
            {token ? `${token.substring(0, 20)}...` : "No token"}
          </span>
        </div>
      </div>
    </div>
  );
}
