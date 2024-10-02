import { apiClient } from '../../services/apiClient';

export const ClientDetailsAPI = {
  fetchAll: () => apiClient.get('/clientdetailss'),
  fetchById: (id: number) => apiClient.get(`/clientdetailss/${id}`),
  create: (newItem: any) => apiClient.post('/clientdetailss', newItem),
  update: (id: number, updatedItem: any) => apiClient.put(`/clientdetailss/${id}`, updatedItem),
  delete: (id: number) => apiClient.delete(`/clientdetailss/${id}`),
};