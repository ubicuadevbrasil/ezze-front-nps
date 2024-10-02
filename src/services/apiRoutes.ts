export const API_BASE_URL = 'http://localhost:5151'

export interface API {
	BASE: string
	GET_ALL?: string
	GET_BY_ID?: (id: number) => string
	CREATE?: string
	UPDATE?: (id: number) => string
	DELETE?: (id: number) => string
	[key: string]: any // Permite adicionar outras rotas dinamicamente
}

export const AUTHENTICATION_API: API = {
	BASE: `${API_BASE_URL}/api/auth`,
	REGISTER: `${API_BASE_URL}/api/auth/register`,
	LOGIN: `${API_BASE_URL}/api/auth/login`,
	LOGOUT: `${API_BASE_URL}/api/auth/logout`,
	GET_CURRENT_USER: `${API_BASE_URL}/api/auth/current-user`,
	REFRESH_TOKEN: `${API_BASE_URL}/api/auth/refresh-token`,
	REVOKE: `${API_BASE_URL}/api/auth/revoke`
}
export const CLIENTDETAILS_API: API = {
	BASE: `${API_BASE_URL}/clientdetailss`,
	GET_ALL: `${API_BASE_URL}/clientdetailss`,
	GET_BY_ID: (id: number) => `${API_BASE_URL}/clientdetailss/${id}`,
	CREATE: `${API_BASE_URL}/clientdetailss`,
	UPDATE: (id: number) => `${API_BASE_URL}/clientdetailss/${id}`,
	DELETE: (id: number) => `${API_BASE_URL}/clientdetailss/${id}`,
}
export const CLOSETHELOOP_API: API = {
	BASE: `${API_BASE_URL}/closetheloops`,
	GET_ALL: `${API_BASE_URL}/closetheloops`,
	GET_BY_ID: (id: number) => `${API_BASE_URL}/closetheloops/${id}`,
	CREATE: `${API_BASE_URL}/closetheloops`,
	UPDATE: (id: number) => `${API_BASE_URL}/closetheloops/${id}`,
	DELETE: (id: number) => `${API_BASE_URL}/closetheloops/${id}`,
}
export const DASHBOARD_API: API = {
	BASE: `${API_BASE_URL}/dashboards`,
	GET_ALL: `${API_BASE_URL}/dashboards`,
	GET_BY_ID: (id: number) => `${API_BASE_URL}/dashboards/${id}`,
	CREATE: `${API_BASE_URL}/dashboards`,
	UPDATE: (id: number) => `${API_BASE_URL}/dashboards/${id}`,
	DELETE: (id: number) => `${API_BASE_URL}/dashboards/${id}`,
}
export const PENDINGSEARCH_API: API = {
	BASE: `${API_BASE_URL}/pendingsearchs`,
	GET_ALL: `${API_BASE_URL}/pendingsearchs`,
	GET_BY_ID: (id: number) => `${API_BASE_URL}/pendingsearchs/${id}`,
	CREATE: `${API_BASE_URL}/pendingsearchs`,
	UPDATE: (id: number) => `${API_BASE_URL}/pendingsearchs/${id}`,
	DELETE: (id: number) => `${API_BASE_URL}/pendingsearchs/${id}`,
}
export const USERALERT_API: API = {
	BASE: `${API_BASE_URL}/useralerts`,
	GET_ALL: `${API_BASE_URL}/useralerts`,
	GET_BY_ID: (id: number) => `${API_BASE_URL}/useralerts/${id}`,
	CREATE: `${API_BASE_URL}/useralerts`,
	UPDATE: (id: number) => `${API_BASE_URL}/useralerts/${id}`,
	DELETE: (id: number) => `${API_BASE_URL}/useralerts/${id}`,
}

export const MESSAGE_API: API = {
	BASE: `${API_BASE_URL}/api/messages`,
	POST_MESSAGES: `${API_BASE_URL}/api/messages/send`,
	POST_MESSAGES_SINGLE: `${API_BASE_URL}/api/messages/single/send`,
}
