"use client";

import { useEffect, useState } from "react";

interface PerformanceMetrics {
  component: string;
  mountTime: number;
  dataLoadTime?: number;
}

export function PerformanceDebug({
  component,
  isLoading
}: {
  component: string;
  isLoading: boolean;
}) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    component,
    mountTime: 0,
  });
  const [mountStart] = useState(Date.now());
  const [dataLoadStart, setDataLoadStart] = useState<number | null>(null);

  useEffect(() => {
    // Record component mount time
    const mountDuration = Date.now() - mountStart;
    setMetrics(prev => ({ ...prev, mountTime: mountDuration }));
  }, [mountStart]);

  useEffect(() => {
    if (isLoading && !dataLoadStart) {
      // Start tracking data load time
      setDataLoadStart(Date.now());
    } else if (!isLoading && dataLoadStart) {
      // Data loaded, calculate duration
      const dataLoadDuration = Date.now() - dataLoadStart;
      setMetrics(prev => ({ ...prev, dataLoadTime: dataLoadDuration }));
      console.log(`📊 ${component} Performance:`, {
        mountTime: `${metrics.mountTime}ms`,
        dataLoadTime: `${dataLoadDuration}ms`,
        total: `${metrics.mountTime + dataLoadDuration}ms`,
      });
    }
  }, [isLoading, dataLoadStart, component, metrics.mountTime]);

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-20 right-4 bg-blue-900 text-white p-3 rounded-lg shadow-lg text-xs z-50 max-w-xs">
      <div className="font-bold mb-1">⚡ Performance - {component}</div>
      <div className="space-y-1">
        <div>Mount: {metrics.mountTime}ms</div>
        <div>
          Data Load: {metrics.dataLoadTime ? `${metrics.dataLoadTime}ms` : isLoading ? "Loading..." : "-"}
        </div>
        {metrics.dataLoadTime && (
          <div className="font-bold border-t border-blue-700 pt-1 mt-1">
            Total: {metrics.mountTime + metrics.dataLoadTime}ms
          </div>
        )}
      </div>
    </div>
  );
}
