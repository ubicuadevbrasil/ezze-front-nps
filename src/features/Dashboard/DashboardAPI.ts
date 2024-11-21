import { DashboardResponse } from '@/models/dashboardResponse'
import { DashboardFilter } from "@/models/dashboardFilters"
import apiClient from '@/services/apiClient'
import { DASHBOARD_API } from '@/services/apiRoutes'



export const DashboardAPI = {
	get: (filters: DashboardFilter) => {
		return apiClient.get<DashboardResponse>(DASHBOARD_API.BASE, {
			params: filters})
	},
}
