import apiClient from '@/services/apiClient'

// Defina uma interface representando a estrutura dos dados do cliente
interface ClientDetails {
	id?: number // O id pode ser opcional em um novo item
	name: string
	email: string
	phone: string
	// Adicione outros campos relevantes conforme necessário
}

export const ClientDetailsAPI = {
	fetchAll: () => apiClient.get<ClientDetails[]>('/clientdetailss'), // Tipo da resposta
	fetchById: (id: number) => apiClient.get<ClientDetails>(`/clientdetailss/${id}`), // Tipo da resposta
	create: (newItem: ClientDetails) => apiClient.post('/clientdetailss', newItem), // Use o tipo definido
	update: (id: number, updatedItem: ClientDetails) => apiClient.put(`/clientdetailss/${id}`, updatedItem), // Use o tipo definido
	delete: (id: number) => apiClient.delete(`/clientdetailss/${id}`),
}
