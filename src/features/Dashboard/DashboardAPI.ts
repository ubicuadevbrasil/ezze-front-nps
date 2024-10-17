import apiClient from '@/services/apiClient'

// Defina uma interface representando a estrutura dos dados que serão armazenados na propriedade data
interface DataItem {
	// Defina os campos que você espera que cada item de dados tenha
	// Por exemplo:
	key: string
	value: number
	// Adicione outros campos conforme necessário
}

// Defina uma interface representando a estrutura dos dados do dashboard
interface Dashboard {
	id?: number // O id pode ser opcional em um novo item
	title: string
	description: string
	data: DataItem[] // Use a interface DataItem ao invés de any
	// Adicione outros campos relevantes conforme necessário
}

export const DashboardAPI = {
	fetchAll: () => apiClient.get<Dashboard[]>('/dashboards'), // Tipo da resposta
	fetchById: (id: number) => apiClient.get<Dashboard>(`/dashboards/${id}`), // Tipo da resposta
	create: (newItem: Dashboard) => apiClient.post('/dashboards', newItem), // Use o tipo definido
	update: (id: number, updatedItem: Dashboard) => apiClient.put(`/dashboards/${id}`, updatedItem), // Use o tipo definido
	delete: (id: number) => apiClient.delete(`/dashboards/${id}`),
}
