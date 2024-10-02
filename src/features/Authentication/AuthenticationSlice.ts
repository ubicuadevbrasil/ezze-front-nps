// src/features/Authentication/AuthenticationSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AUTHENTICATION_API } from '@/services/apiRoutes'
import axios from 'axios'

// Renomeie AuthState para algo como AuthenticationState
export interface AuthenticationState {
	user: null | object
	token: string | null
	status: 'idle' | 'loading' | 'failed'
}

// AuthenticationSlice.ts

const initialState = {
    user: null,
    token: null,
    refreshToken: null, // Adicione esta linha
    status: 'idle',
    // outros estados, se necessário
};


// Async thunks
export const login = createAsyncThunk('auth/login', async (credentials) => {
	const response = await axios.post(AUTHENTICATION_API.LOGIN, credentials)
	return response.data // Deve incluir { user, token }
})


export const refreshAccessToken = createAsyncThunk('auth/refreshToken', async (refreshToken: string) => {
	const response = await axios.post(AUTHENTICATION_API.REFRESH_TOKEN, { refreshToken })
	return response.data // Supondo que a resposta contenha o novo token
})

// Resto do slice permanece o mesmo...
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// outros reducers
		logout: (state) => {
			state.user = null
			state.token = null
			state.refreshToken = null // Limpa o refreshToken ao sair
			state.status = 'idle'
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user // Armazenando usuário
				state.token = action.payload.token // Armazenando token
				state.refreshToken = action.payload.refreshToken // Armazenando refreshToken
				state.status = 'idle'
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed' // Lidar com erro de login
			})
			.addCase(refreshAccessToken.fulfilled, (state, action) => {
				state.token = action.payload.token // Atualiza o token com o novo
			})
			.addCase(refreshAccessToken.rejected, (state, action) => {
				// Lidar com erro ao atualizar token
			})
	},
})

export const { actions, reducer } = authSlice
export default reducer
