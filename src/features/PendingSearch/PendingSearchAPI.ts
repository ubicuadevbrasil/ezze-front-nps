import { apiClient } from '../../services/apiClient';

export const PendingSearchAPI = {
  fetchAll: () => apiClient.get('/pendingsearchs'),
  fetchById: (id: number) => apiClient.get(`/pendingsearchs/${id}`),
  create: (newItem: any) => apiClient.post('/pendingsearchs', newItem),
  update: (id: number, updatedItem: any) => apiClient.put(`/pendingsearchs/${id}`, updatedItem),
  delete: (id: number) => apiClient.delete(`/pendingsearchs/${id}`),
};