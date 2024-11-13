import { DashboardResponse } from '@/models/dashboardResponse'
import { DashboardFilter } from "@/models/dashboardFilters"
import apiClient from '@/services/apiClient'
import { DASHBOARD_API } from '@/services/apiRoutes'



export const DashboardAPI = {
	post: (filters: DashboardFilter) => {
		return apiClient.post<DashboardResponse>(DASHBOARD_API.BASE, {
			params: filters})
	},
}
