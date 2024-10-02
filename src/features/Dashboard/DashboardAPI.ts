import { apiClient } from '../../services/apiClient';

export const DashboardAPI = {
  fetchAll: () => apiClient.get('/dashboards'),
  fetchById: (id: number) => apiClient.get(`/dashboards/${id}`),
  create: (newItem: any) => apiClient.post('/dashboards', newItem),
  update: (id: number, updatedItem: any) => apiClient.put(`/dashboards/${id}`, updatedItem),
  delete: (id: number) => apiClient.delete(`/dashboards/${id}`),
};