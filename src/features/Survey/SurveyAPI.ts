import apiClient from '@/services/apiClient'
import { SURVEY_API } from '@/services/apiRoutes'

export const PromoterAPI = {
	post: (body: any) => {
		return apiClient.post<any>(SURVEY_API.postPromoter, body)
	},
}
