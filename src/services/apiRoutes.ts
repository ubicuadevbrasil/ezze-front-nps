import { env } from "@/env"

export interface API {
	BASE: string
	GET_ALL?: string
	GET_BY_ID?: (id: number) => string
	CREATE?: string
	UPDATE?: (id: number) => string
	DELETE?: (id: number) => string
	[key: string]: any // Permite adicionar outras rotas dinamicamente
}

export const API_BASE_URL = env.VITE_API_URL

export const AUTHENTICATION_API: API = {
	BASE: `${env.VITE_API_URL}/api/user`,
	REGISTER: `${env.VITE_API_URL}/api/user/register`,
	LOGIN: `${env.VITE_API_URL}/api/user/login`,
	LOGOUT: `${env.VITE_API_URL}/api/user/logout`,
	GET_CURRENT_USER: `${env.VITE_API_URL}/api/user/current-user`,
	REFRESH_TOKEN: `${env.VITE_API_URL}/api/user/refresh-token`,
	REVOKE: `${env.VITE_API_URL}/api/user/revoke`
}

export const CLIENTDETAILS_API: API = {
	BASE: `${env.VITE_API_URL}/clientdetailss`,
	GET_ALL: `${env.VITE_API_URL}/clientdetailss`,
	GET_BY_ID: (id: number) => `${env.VITE_API_URL}/clientdetailss/${id}`,
	CREATE: `${env.VITE_API_URL}/clientdetailss`,
	UPDATE: (id: number) => `${env.VITE_API_URL}/clientdetailss/${id}`,
	DELETE: (id: number) => `${env.VITE_API_URL}/clientdetailss/${id}`,
}
export const CLOSETHELOOP_API: API = {
	BASE: `${env.VITE_API_URL}/closetheloops`,
	GET_ALL: `${env.VITE_API_URL}/closetheloops`,
	GET_BY_ID: (id: number) => `${env.VITE_API_URL}/closetheloops/${id}`,
	CREATE: `${env.VITE_API_URL}/closetheloops`,
	UPDATE: (id: number) => `${env.VITE_API_URL}/closetheloops/${id}`,
	DELETE: (id: number) => `${env.VITE_API_URL}/closetheloops/${id}`,
}
export const DASHBOARD_API: API = {
	BASE: `${env.VITE_API_URL}/dashboards`,
	GET: `${env.VITE_API_URL}/dashboards`,
}
export const PENDINGSEARCH_API: API = {
	BASE: `${env.VITE_API_URL}/pendingsearchs`,
	GET_ALL: `${env.VITE_API_URL}/pendingsearchs`,
	GET_BY_ID: (id: number) => `${env.VITE_API_URL}/pendingsearchs/${id}`,
	CREATE: `${env.VITE_API_URL}/pendingsearchs`,
	UPDATE: (id: number) => `${env.VITE_API_URL}/pendingsearchs/${id}`,
	DELETE: (id: number) => `${env.VITE_API_URL}/pendingsearchs/${id}`,
}
export const USERALERT_API: API = {
	BASE: `${env.VITE_API_URL}/useralerts`,
	GET_ALL: `${env.VITE_API_URL}/useralerts`,
	GET_BY_ID: (id: number) => `${env.VITE_API_URL}/useralerts/${id}`,
	CREATE: `${env.VITE_API_URL}/useralerts`,
	UPDATE: (id: number) => `${env.VITE_API_URL}/useralerts/${id}`,
	DELETE: (id: number) => `${env.VITE_API_URL}/useralerts/${id}`,
}

export const MESSAGE_API: API = {
	BASE: `${env.VITE_API_URL}/api/messages`,
	POST_MESSAGES: `${env.VITE_API_URL}/api/messages/send`,
	POST_MESSAGES_SINGLE: `${env.VITE_API_URL}/api/messages/single/send`,
}
