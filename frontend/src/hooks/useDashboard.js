import { useQuery } from "@tanstack/react-query";
import dashboardService from "../services/dashboardService";

export default function useDashboard() {
  return useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      const response = await dashboardService.getStats();
      return response.data;
    },
    refetchInterval: 10000, // 10 seconds
  });
}