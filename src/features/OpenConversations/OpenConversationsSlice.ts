import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Conversation } from '@/models/openConversations'
import { OpenConversationCalls } from './OpenConversationsAPI'

// Definindo a interface para o estado do slice
interface ConversationsState {
	data: Array<Conversation> | null
	loading: boolean
	error: string | null
}

// Estado inicial
const initialState: ConversationsState = {
	data: null,
	loading: false,
	error: null,
}

export const fetchDashboard = createAsyncThunk('openConversations/fetchConversationsList', async () => {
	const response = await OpenConversationCalls.get()
	return response.data
})

const conversationSlice = createSlice({
	name: 'conversation',
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDashboard.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchDashboard.fulfilled, (state, action: PayloadAction<Array<Conversation>>) => {
				state.loading = false
				state.data = action.payload
			})
			.addCase(fetchDashboard.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Failed to fetch conversations data'
			})
	},
})

// Exportando o reducer do slice
export default conversationSlice.reducer
export type { ConversationsState }
