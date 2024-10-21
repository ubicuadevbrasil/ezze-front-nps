import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { DashboardResponse } from '@/models/dashboardResponse'
import { DashboardFilter } from '@/models/dashboardFilters'
import { DashboardAPI } from './DashboardAPI'

// Definindo a interface para o estado do slice
interface DashboardState {
	data: DashboardResponse | null
	loading: boolean
	error: string | null
}

// Estado inicial
const initialState: DashboardState = {
	data: null,
	loading: false,
	error: null,
}

// Ação assíncrona para buscar os dados do dashboard com filtros
export const fetchDashboard = createAsyncThunk('dashboard/fetchDashboard', async (filters: DashboardFilter) => {
	const response = await DashboardAPI.get(filters)
	return response.data
})

// Slice do dashboard
const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		// Você pode adicionar reducers comuns aqui se necessário
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDashboard.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchDashboard.fulfilled, (state, action: PayloadAction<DashboardResponse>) => {
				state.loading = false
				state.data = action.payload
			})
			.addCase(fetchDashboard.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Failed to fetch dashboard data'
			})
	},
})

// Exportando o reducer do slice
export default dashboardSlice.reducer
export type {DashboardState}
