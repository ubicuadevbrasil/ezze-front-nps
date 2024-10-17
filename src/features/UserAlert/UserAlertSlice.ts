import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UserAlertAPI } from './UserAlertAPI'

export interface UserAlert {
	id: number
	name: string
	description: string
	title: string
	message: string
	data?: any
}

interface UserAlertState {
	items: any
	status: 'idle' | 'loading' | 'failed'
}

const initialState: UserAlertState = {
	items: null,
	status: 'idle',
}

export const fetchUserAlertsAsync = createAsyncThunk('UserAlert/fetchUserAlerts', async () => {
	const response = await UserAlertAPI.fetchAll()
	return response // Retorna a resposta completa
})

export const createUserAlertAsync = createAsyncThunk('UserAlert/createUserAlert', async (newItem: UserAlert) => {
	const response = await UserAlertAPI.create(newItem)
	return response // Retorna a resposta completa
})

export const updateUserAlertAsync = createAsyncThunk('UserAlert/updateUserAlert', async (updatedItem: UserAlert) => {
	const response = await UserAlertAPI.update(updatedItem.id, updatedItem)
	return response // Retorna a resposta completa
})

export const deleteUserAlertAsync = createAsyncThunk('UserAlert/deleteUserAlert', async (id: number) => {
	const response = await UserAlertAPI.delete(id)
	return response // Retorna a resposta completa
})

const UserAlertSlice = createSlice({
	name: 'UserAlert',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserAlertsAsync.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchUserAlertsAsync.fulfilled, (state, action) => {
				state.status = 'idle'
				state.items = action.payload
			})
			.addCase(createUserAlertAsync.fulfilled, (state, action) => {
				state.items = action.payload
			})
			.addCase(updateUserAlertAsync.fulfilled, (state, action) => {
				state.items = action.payload
			})
			.addCase(deleteUserAlertAsync.fulfilled, (state, action) => {
				state.items = action.payload
			})
	},
})

export default UserAlertSlice.reducer
