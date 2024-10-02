import { AuthenticationLayout } from '@/pages/layouts/Authentication'
import { Login } from '@/pages/authentication/Login'
import { RecoverPassword } from '@/pages/authentication/RecoverPassword'
import { NewPassword } from '@/pages/authentication/NewPassoword'
import PendingSearch from '@/pages/PendingSearch'
import { RouteObject } from 'react-router-dom'
import ClientDetails from '@/pages/ClientDetails'
import CloseTheLoop from '@/pages/CloseTheLoop'
import UserAlerts from '@/pages/UserAlert'
import Dashboard from '@/pages/Dashboard'
import SummaryServices from '@/pages/Administrative/SummaryServices'
import Attandants from "@/pages/Administrative/Attendants"

export type CustomRoute = {
	path: string
	element?: React.ReactElement
	label?: string
	children?: CustomRoute[],
	isShowed?: boolean
}

export const routes: CustomRoute[] = [
	{
		path: '/auth',
		element: <AuthenticationLayout />,
		label: 'Authentication',
		children: [
			{ path: '', element: <Login />, label: 'Login' },
			{ path: 'recover-password', element: <RecoverPassword />, label: 'Recover Password' },
			{ path: 'new-password', element: <NewPassword />, label: 'New Password' },
		],
		isShowed: false,
	},
	{
		path: '/',
		element: <PendingSearch />,
		label: 'Pesquisas pendentes',
		isShowed: true,
	},
	{
		path: '/clientDetails/',
		label: '',
		element: <ClientDetails />,
		isShowed: false,
	},
	{
		path: '/closetheloop',
		label: 'Close the loop',
		element: <CloseTheLoop />,
		isShowed: true,
	},
	{
		path: '/dashboard/',
		label: 'Dashboard',
		element: <Dashboard />,
		isShowed: true,
	},
	{
		path: '/userAlerts/',
		element: <UserAlerts />,
		isShowed: false,
	},
	{
		path: '/',
		label: 'Administrativo',
		children: [
			{ path: 'summaryServices', element: <SummaryServices />, label: 'Resumo de atendimentos', isShowed: true },

			{ path: 'attendants', element: <Attandants/>, label: 'Atendentes', isShowed: true },

			{ path: 'tabs', element: <div>Placeholder para Tabulação</div>, label: 'Tabulação', isShowed: true },

			{ path: 'tabs', element: <div />, label: 'Tabulação', isShowed: true },

			{ path: 'openCalls', element: <div />, label: 'Atendimentos em aberto', isShowed: true },
			{ path: 'serviceAnalyticalReport', element: <div />, label: 'Relatório analítico de atendimento', isShowed: true },
		],
		isShowed: true,
	},
]

const convertToRouteObject = (customRoute: CustomRoute): RouteObject => {
	const { path, element, children } = customRoute
	return {
		path,
		element,
		children: children ? children.map(convertToRouteObject) : undefined,
	}
}

export const routeObjects: RouteObject[] = routes.map(convertToRouteObject)
