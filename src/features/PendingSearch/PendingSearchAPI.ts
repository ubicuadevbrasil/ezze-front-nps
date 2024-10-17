import apiClient from '@/services/apiClient'

// Defina uma interface representando a estrutura dos dados de um item de pesquisa pendente
interface PendingSearch {
	id?: number // O id pode ser opcional em um novo item
	title: string
	description: string
	// Adicione outros campos relevantes conforme necessário
}

export const PendingSearchAPI = {
	fetchAll: async () => {
		return await apiClient.get('/pending-searchs') // Ajuste a rota conforme necessário
	},
	create: async (newItem: PendingSearch) => {
		return await apiClient.post('/pending-searchs', newItem) // Ajuste a rota conforme necessário
	},
	update: async (id: number, updatedItem: PendingSearch) => {
		return await apiClient.put(`/pending-searchs/${id}`, updatedItem) // Ajuste a rota conforme necessário
	},
	delete: async (id: number) => {
		return await apiClient.delete(`/pending-searchs/${id}`) // Ajuste a rota conforme necessário
	},
}

