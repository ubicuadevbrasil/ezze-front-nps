import axios from 'axios'
import { AUTHENTICATION_API } from '@/services/apiRoutes'

interface RegisterDTO {
	username: string
	email: string
	password: string
}

interface SignInBody {
	email: string
	password: string
}

const register = async (data: RegisterDTO) => {
	const response = await axios.post(AUTHENTICATION_API.REGISTER as string, data)
	return response.data
}

const login = async (data: SignInBody) => {
	const response = await axios.post(`${AUTHENTICATION_API.LOGIN}` , {
		username: "Xarlys",
		email: data.email,
		phoneNumber: "",
		password: data.password
	})
	return response.data
}

const refreshToken = async () => {
	const response = await axios.post(AUTHENTICATION_API.REFRESH_TOKEN as string, {
		// Envie o refresh token se necessário
	})
	return response.data
}

const revokeToken = async () => {
	const response = await axios.post(AUTHENTICATION_API.REVOKE as string, {
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
