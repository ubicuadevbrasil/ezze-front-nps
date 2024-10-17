export const API_BASE_URL = 'http://localhost:5151'

type ApiMethod = string | ((id: number) => string) // Tipo que permite string ou uma função que recebe um número e retorna uma string

export interface API {
	BASE: string
	GET_ALL?: string
	GET_BY_ID?: (id: number) => string
	CREATE?: string
	UPDATE?: (id: number) => string
	DELETE?: (id: number) => string
	[key: string]: ApiMethod | undefined // Permite adicionar outras rotas dinamicamente
}

export const AUTHENTICATION_API: API = {
	BASE: `${API_BASE_URL}/api/auth`,
	REGISTER: `${API_BASE_URL}/api/auth/register`,
	LOGIN: `${API_BASE_URL}/api/auth/login`,
	LOGOUT: `${API_BASE_URL}/api/auth/logout`,
	GET_CURRENT_USER: `${API_BASE_URL}/api/auth/current-user`,
	REFRESH_TOKEN: `${API_BASE_URL}/api/auth/refresh-token`,
	REVOKE: `${API_BASE_URL}/api/auth/revoke`,
}

export const CLIENTDETAILS_API: API = {
	BASE: `${API_BASE_URL}/clientdetailss`,
	GET_ALL: `${API_BASE_URL}/clientdetailss`,
	GET_BY_ID: (id: number) => `${API_BASE_URL}/clientdetailss/${id}`,
	CREATE: `${API_BASE_URL}/clientdetailss`,
	UPDATE: (id: number) => `${API_BASE_URL}/clientdetailss/${id}`,
	DELETE: (id: number) => `${API_BASE_URL}/clientdetailss/${id}`,
}
