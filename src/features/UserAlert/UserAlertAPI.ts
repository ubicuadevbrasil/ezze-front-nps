import { apiClient } from '../../services/apiClient';

export const UserAlertAPI = {
  fetchAll: () => apiClient.get('/useralerts'),
  fetchById: (id: number) => apiClient.get(`/useralerts/${id}`),
  create: (newItem: any) => apiClient.post('/useralerts', newItem),
  update: (id: number, updatedItem: any) => apiClient.put(`/useralerts/${id}`, updatedItem),
  delete: (id: number) => apiClient.delete(`/useralerts/${id}`),
};