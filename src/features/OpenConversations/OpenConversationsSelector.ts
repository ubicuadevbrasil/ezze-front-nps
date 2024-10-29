import { RootState } from '@/app/store' 
import { ConversationsState } from './OpenConversationsSlice'
import { Conversation } from '@/models/openConversations'

// Seletor para buscar o estado de conversações
export const selectConversationsState = (state: RootState): ConversationsState => state.openConversations

// Seletor para buscar a lista de conversações
export const selectConversationsList = (state: RootState): Conversation[] | null => selectConversationsState(state).data

// Seletor para buscar o status de carregamento
export const selectConversationsLoading = (state: RootState): boolean => selectConversationsState(state).loading

// Seletor para buscar o erro
export const selectConversationsError = (state: RootState): string | null => selectConversationsState(state).error
