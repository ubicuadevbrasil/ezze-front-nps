import { DashboardResponse } from '@/models/dashboardResponse'
import { DashboardFilter } from "@/models/dashboardFilters"
import apiClient from '@/services/apiClient'

export const DashboardAPI = {
	get: (filters: DashboardFilter) => {
		return apiClient.get<DashboardResponse>('/dashboards', {
			params: filters})
	},
}
