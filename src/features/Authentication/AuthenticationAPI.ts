import axios from 'axios'
import {AUTHENTICATION_API} from '@/services/apiRoutes'

const API_URL = 'http://localhost:5000/api/auth' // Altere para a URL da sua API

interface RegisterDTO {
	username: string
	email: string
	password: string
}

interface LoginDTO {
	username: string
	password: string
}

interface RefreshTokenResponse {
	accessToken: string
	refreshToken: string
}

const register = async (data: RegisterDTO) => {
	const response = await axios.post(AUTHENTICATION_API.REGISTER, data)
	return response.data
}

const login = async (data: LoginDTO) => {
	const response = await axios.post(AUTHENTICATION_API.LOGIN, data)
	return response.data
}

const refreshToken = async () => {
	const response = await axios.post(AUTHENTICATION_API.REFRESH_TOKEN, {
		// Envie o refresh token se necessário
	})
	return response.data
}

const revokeToken = async () => {
	const response = await axios.post(AUTHENTICATION_API.REVOKE, {
		// Envie o token a ser revogado
	})
	return response.data
}

export default {
	register,
	login,
	refreshToken,
	revokeToken,
}
