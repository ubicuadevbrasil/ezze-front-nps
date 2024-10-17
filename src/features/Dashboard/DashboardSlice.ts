import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { DashboardAPI } from './DashboardAPI'

export interface Dashboard {
	id: number
	title: string // Renomeado de name para title
	data: any // Ajuste o tipo de acordo com o que a API retorna
	description: string
}

interface DashboardState {
	items: Dashboard[]
	status: 'idle' | 'loading' | 'failed'
}

const initialState: DashboardState = {
	items: [],
	status: 'idle',
}

export const fetchDashboardsAsync = createAsyncThunk('Dashboard/fetchDashboards', async () => {
	const response = await DashboardAPI.fetchAll()
	return response.data as Dashboard[] // Assegure-se de que response.data seja um array de Dashboard
})

export const createDashboardAsync = createAsyncThunk('Dashboard/createDashboard', async (newItem: Dashboard) => {
	const response = await DashboardAPI.create(newItem)
	return response.data as Dashboard // Assegure-se de que response.data seja um Dashboard válido
})

export const updateDashboardAsync = createAsyncThunk('Dashboard/updateDashboard', async (updatedItem: Dashboard) => {
	const response = await DashboardAPI.update(updatedItem.id, updatedItem)
	return response.data as Dashboard // Assegure-se de que response.data seja um Dashboard válido
})

export const deleteDashboardAsync = createAsyncThunk('Dashboard/deleteDashboard', async (id: number) => {
	await DashboardAPI.delete(id)
	return id
})

const DashboardSlice = createSlice({
	name: 'Dashboard',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDashboardsAsync.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchDashboardsAsync.fulfilled, (state, action) => {
				state.status = 'idle'
				state.items = action.payload // Certifique-se de que action.payload é do tipo Dashboard[]
			})
			.addCase(createDashboardAsync.fulfilled, (state, action) => {
				state.items.push(action.payload)
			})
			.addCase(updateDashboardAsync.fulfilled, (state, action) => {
				const index = state.items.findIndex((item) => item.id === action.payload.id)
				if (index !== -1) {
					state.items[index] = action.payload
				}
			})
			.addCase(deleteDashboardAsync.fulfilled, (state, action) => {
				state.items = state.items.filter((item) => item.id !== action.payload)
			})
	},
})

export default DashboardSlice.reducer
