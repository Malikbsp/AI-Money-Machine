import apiClient from "./apiClient";

const dashboardService = {
  getStats: () => apiClient.get("/api/dashboard/stats"),
};

export default dashboardService;