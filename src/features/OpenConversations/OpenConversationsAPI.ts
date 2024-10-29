import { Conversation } from '@/models/openConversations'
import apiClient from '@/services/apiClient'
import { CONVERSATIONS } from '@/services/apiRoutes'

export const OpenConversationCalls = {
	get: () => {
		return apiClient.get<Array<Conversation>>(CONVERSATIONS.GET_OPEN_CONVERSATIONS)
	},
}
