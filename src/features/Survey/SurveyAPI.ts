import apiClient from '@/services/apiClient'
import { SURVEY_API } from '@/services/apiRoutes'

export const PromoterAPI = {
	post: (body: any) => {
		return apiClient.post<any>(SURVEY_API.postPromoter, body)
	},
	postResendSearch: (body: any) => {
		return apiClient.post<any>(SURVEY_API.postPromoterResendSearch, body)
	}
}

export const DetractorAPI = {
	post: (body: any) => {
		return apiClient.post<any>(SURVEY_API.postDetractor, body)
	},
	postResendSearch: (body: any) => {
		return apiClient.post<any>(SURVEY_API.postDetractorResendSearch, body)
	},
}
