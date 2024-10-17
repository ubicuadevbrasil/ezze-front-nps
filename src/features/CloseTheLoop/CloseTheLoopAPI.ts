import apiClient from '@/services/apiClient'

// Defina uma interface representando a estrutura dos dados do "Close The Loop"
interface CloseTheLoop {
	id?: number // O id pode ser opcional em um novo item
	title: string
	description: string
	// Adicione outros campos relevantes conforme necessário
}

export const CloseTheLoopAPI = {
	fetchAll: () => apiClient.get<CloseTheLoop[]>('/closetheloops'), // Tipo da resposta
	fetchById: (id: number) => apiClient.get<CloseTheLoop>(`/closetheloops/${id}`), // Tipo da resposta
	create: (newItem: CloseTheLoop) => apiClient.post('/closetheloops', newItem), // Use o tipo definido
	update: (id: number, updatedItem: CloseTheLoop) => apiClient.put(`/closetheloops/${id}`, updatedItem), // Use o tipo definido
	delete: (id: number) => apiClient.delete(`/closetheloops/${id}`),
}
