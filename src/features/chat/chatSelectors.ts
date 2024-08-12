import { RootState } from '../../app/store'

export const selectCurrentChat = (state: RootState) => state.chat.currentChat
export const selectMessages = (state: RootState) => state.chat.messages
export const selectMessagesByPhone = (telefone: number) => (state: RootState) => state.chat.messages[telefone] || []
export const selectIsChatOpen = (state: RootState) => state.chat.isOpen
