import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CloseTheLoopAPI } from './CloseTheLoopAPI'

export interface CloseTheLoop {
	id: number
	title: string // Adicione a propriedade title
	name: string // Inclua outras propriedades necessárias
	description: string // Adicione qualquer outra propriedade que a API requer
}

interface CloseTheLoopState {
	items: CloseTheLoop[]
	status: 'idle' | 'loading' | 'failed'
}

const initialState: CloseTheLoopState = {
	items: [],
	status: 'idle',
}

export const fetchCloseTheLoopAsync = createAsyncThunk('CloseTheLoop/fetchCloseTheLoop', async () => {
	const response = await CloseTheLoopAPI.fetchAll()
	return response.data as CloseTheLoop[] // Certifique-se de que isso retorne um array de CloseTheLoop
})

export const createCloseTheLoopAsync = createAsyncThunk('CloseTheLoop/createCloseTheLoop', async (newItem: CloseTheLoop) => {
	const response = await CloseTheLoopAPI.create(newItem)
	return response.data as CloseTheLoop // Certifique-se de que isso retorne um CloseTheLoop válido
})

export const updateCloseTheLoopAsync = createAsyncThunk('CloseTheLoop/updateCloseTheLoop', async (updatedItem: CloseTheLoop) => {
	const response = await CloseTheLoopAPI.update(updatedItem.id, updatedItem)
	return response.data as CloseTheLoop // Certifique-se de que isso retorne um CloseTheLoop válido
})

export const deleteCloseTheLoopAsync = createAsyncThunk('CloseTheLoop/deleteCloseTheLoop', async (id: number) => {
	await CloseTheLoopAPI.delete(id)
	return id
})

const CloseTheLoopSlice = createSlice({
	name: 'CloseTheLoop',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCloseTheLoopAsync.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchCloseTheLoopAsync.fulfilled, (state, action) => {
				state.status = 'idle'
				state.items = action.payload // Certifique-se de que action.payload é do tipo CloseTheLoop[]
			})
			.addCase(createCloseTheLoopAsync.fulfilled, (state, action) => {
				state.items.push(action.payload)
			})
			.addCase(updateCloseTheLoopAsync.fulfilled, (state, action) => {
				const index = state.items.findIndex((item) => item.id === action.payload.id)
				if (index !== -1) {
					state.items[index] = action.payload
				}
			})
			.addCase(deleteCloseTheLoopAsync.fulfilled, (state, action) => {
				state.items = state.items.filter((item) => item.id !== action.payload)
			})
	},
})

export default CloseTheLoopSlice.reducer

