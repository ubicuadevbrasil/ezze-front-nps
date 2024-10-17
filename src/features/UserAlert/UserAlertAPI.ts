import apiClient from '@/services/apiClient' // Certifique-se de que o caminho está correto

// Interface representando a estrutura de um alerta de usuário
interface UserAlert {
	id?: number // Pode ser opcional para novos itens
	title: string
	message: string
	// Adicione outros campos conforme necessário
}

export const UserAlertAPI = {
	fetchAll: async (): Promise<UserAlert[]> => {
		try {
			const response = await apiClient.get('/useralerts')
			return response.data
		} catch (error) {
			// Aqui você pode adicionar um tratamento de erro mais específico
			console.error('Erro ao buscar alertas de usuário:', error)
			throw error // Re-lança o erro para tratamento em outro lugar, se necessário
		}
	},

	fetchById: async (id: number): Promise<UserAlert> => {
		try {
			const response = await apiClient.get(`/useralerts/${id}`)
			return response.data
		} catch (error) {
			console.error(`Erro ao buscar alerta de usuário com ID ${id}:`, error)
			throw error
		}
	},

	create: async (newItem: UserAlert): Promise<UserAlert> => {
		try {
			const response = await apiClient.post('/useralerts', newItem)
			return response.data
		} catch (error) {
			console.error('Erro ao criar alerta de usuário:', error)
			throw error
		}
	},

	update: async (id: number, updatedItem: UserAlert): Promise<UserAlert> => {
		try {
			const response = await apiClient.put(`/useralerts/${id}`, updatedItem)
			return response.data
		} catch (error) {
			console.error(`Erro ao atualizar alerta de usuário com ID ${id}:`, error)
			throw error
		}
	},

	delete: async (id: number): Promise<void> => {
		try {
			await apiClient.delete(`/useralerts/${id}`)
		} catch (error) {
			console.error(`Erro ao deletar alerta de usuário com ID ${id}:`, error)
			throw error
		}
	},
}
