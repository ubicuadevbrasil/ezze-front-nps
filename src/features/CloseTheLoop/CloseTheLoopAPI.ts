import { apiClient } from '../../services/apiClient';

export const CloseTheLoopAPI = {
  fetchAll: () => apiClient.get('/closetheloops'),
  fetchById: (id: number) => apiClient.get(`/closetheloops/${id}`),
  create: (newItem: any) => apiClient.post('/closetheloops', newItem),
  update: (id: number, updatedItem: any) => apiClient.put(`/closetheloops/${id}`, updatedItem),
  delete: (id: number) => apiClient.delete(`/closetheloops/${id}`),
};