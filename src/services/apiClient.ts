import axios from 'axios'
import { API_BASE_URL } from './apiRoutes'

// Criação da instância do axios com configurações padrão
const apiClient = axios.create({
	baseURL: API_BASE_URL, // Substitua pela URL da sua API
	timeout: 10000, // Tempo máximo de espera pela resposta
	headers: {
		'Content-Type': 'application/json', // Tipo de conteúdo para o envio de dados
	},
})

// Interceptor para tratamento de requisições (opcional)
apiClient.interceptors.request.use(
	(config) => {
		// Aqui você pode adicionar tokens de autenticação ou manipular requisições antes de enviá-las
		const token = localStorage.getItem('token') // Exemplo de obtenção de token
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}` // Adiciona o token no cabeçalho
		}
		return config
	},
	(error) => {
		// Trata erros de requisição
		return Promise.reject(error)
	}
)

// Interceptor para tratamento de respostas (opcional)
apiClient.interceptors.response.use(
	(response) => {
		// Manipule a resposta da API se necessário
		return response
	},
	(error) => {
		// Aqui você pode tratar erros de resposta da API
		return Promise.reject(error)
	}
)

export default apiClient
