// src/features/Authentication/AuthenticationSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { AUTHENTICATION_API } from '@/services/apiRoutes'
import axios from 'axios'

interface User {
	name: string
	email: string
}

interface Payload {
	user: User | null
	token: string
	refreshToken: string | null
}

// Renomeie AuthState para algo como AuthenticationState
export interface AuthenticationState {
	user: null | User
	token: string | null
	refreshToken: string | null // Adicionei refreshToken à interface
	isAuthenticated: boolean
	status: 'idle' | 'loading' | 'failed'
}

interface SignInBody {
	email: string
	password: string
}
// Estado inicial
const initialState: AuthenticationState = {
	user: null,
	token: localStorage.getItem('@nps:token'),
	refreshToken: null, // Adicione esta linha
	isAuthenticated: !!localStorage.getItem('@nps:token'),
	status: 'idle',
}

// Async thunks
export const login = createAsyncThunk('user/login', async (data: SignInBody, rejectWithValue) => {
	try{
		const response = await axios.post(AUTHENTICATION_API.LOGIN, {
			username: "Xarlys",
			email: data.email,
			phoneNumber: "",
			password: data.password
		})

		const token = response.data.token
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		return response.data // Deve incluir { user, token }
	} catch(err: any) {
		console.log(err.messages)
	}
	})

export const refreshAccessToken = createAsyncThunk('auth/refreshToken', async (refreshToken: string) => {
	const response = await axios.post(AUTHENTICATION_API.REFRESH_TOKEN, { refreshToken })
	return response.data // Supondo que a resposta contenha o novo token
})

// Resto do slice
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.user = null
			state.token = null
			state.refreshToken = null // Limpa o refreshToken ao sair
			state.status = 'idle'
			state.isAuthenticated = false
			localStorage.removeItem("@nps:token")
		},
		loadUserFromStorage: (state) => {
			const token = localStorage.getItem('@nps:token');
			if (token) {
					state.token = token;
					state.isAuthenticated = true;
					axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			}
	},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action: PayloadAction<Payload>) => {
				state.user = action.payload.user // Armazenando usuário
				state.token = action.payload.token // Armazenando token
				state.refreshToken = action.payload.refreshToken // Armazenando refreshToken
				state.isAuthenticated = true
				state.status = 'idle'
				localStorage.setItem('@nps:token', action.payload.token);
			})
			.addCase(login.rejected, (state) => {
				state.status = 'failed' // Lidar com erro de login
			})
			.addCase(refreshAccessToken.fulfilled, (state, action) => {
				state.token = action.payload.token // Atualiza o token com o novo
			})
			.addCase(refreshAccessToken.rejected, (state) => {
				console.log(state)
			})
	},
})

export const { logout, loadUserFromStorage } = authSlice.actions;
export const { actions, reducer } = authSlice
export default reducer
