import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type IPedingSearch = {
	idAssistencia: string
	nome: string
	ciaCliente: string
	telefone: number
	numeroAssistencia: number
	dataPrimeroDisparo: Date
	tipoServico: string
	formato: 'E-mail' | 'SMS'
	submit: 'Sim' | 'Não'
	tentativaContato: object
	conversa: object
	tipo: "Promotor" | "Detrator"
}

interface ChatState {
	currentChat: IPedingSearch | null
	messages: { [telefone: number]: string[] }
	isOpen: boolean // Novo estado para controlar se o chat está aberto
}

const initialState: ChatState = {
	currentChat: null,
	messages: {},
	isOpen: false, // Inicialmente fechado
}

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		setCurrentChat: (state, action: PayloadAction<IPedingSearch>) => {
			state.currentChat = action.payload
			state.isOpen = true // Abre o chat ao definir o chat atual
		},
		addMessage: (state, action: PayloadAction<{ telefone: number; message: string }>) => {
			const { telefone, message } = action.payload
			if (!state.messages[telefone]) {
				state.messages[telefone] = []
			}
			state.messages[telefone].push(message)
		},
		closeChat: (state) => {
			state.isOpen = false // Fecha o chat
		},
		openChat: (state) => {
			state.isOpen = true // Abre o chat
		}
	},
})

export const { setCurrentChat, addMessage, closeChat, openChat } = chatSlice.actions

export default chatSlice.reducer
export type { ChatState }
