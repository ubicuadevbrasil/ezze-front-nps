import { AuthenticationLayout } from '@/pages/layouts/Authentication'
import { Login } from '@/pages/authentication/Login'
import { RecoverPassword } from '@/pages/authentication/RecoverPassword'
import { NewPassword } from '@/pages/authentication/NewPassoword'
import PendingSearch from '@/pages/PendingSearch'
import { Navigate, RouteObject } from 'react-router-dom'
import ClientDetails from '@/pages/ClientDetails'
import CloseTheLoop from '@/pages/CloseTheLoop'
import UserAlerts from '@/pages/UserAlert'
import Dashboard from '@/pages/Dashboard'
import SummaryServices from '@/pages/Administrative/SummaryServices'
import Attandants from "@/pages/Administrative/Attendants"
import Tab from '@/pages/Administrative/Tab'
import OpenCalls from '@/pages/Administrative/OpenCalls'
import ServiceAnalyticalReport from '@/pages/Administrative/ServiceAnalyticalReport'
import ProtectedRoute from './ProtectedRoute'

export type CustomRoute = {
	path: string
	element?: React.ReactElement
	label?: string
	children?: CustomRoute[],
	isShowed?: boolean
}

export const routes: CustomRoute[] = [
	{
		path: '/',
		element: <Navigate to="/closetheloop" replace />, // Redireciona automaticamente de "/" para "/pendingSearch"
		isShowed: false, // Não mostramos no menu
	},
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
		path: '/pendingSearch',
		element: <PendingSearch />,
		label: 'Pesquisas pendentes',
		isShowed: true,
	},
	{
		path: '/clientDetails',
		label: '',
		element: <ClientDetails />,
		isShowed: false,
	},
	{
		path: '/closetheloop',
		label: 'Close the loop',
		// element: <CloseTheLoop />,
		element: <ProtectedRoute>
				<CloseTheLoop />
			</ProtectedRoute>,
		isShowed: true,
	},
	{
		path: '/dashboard',
		label: 'Dashboard',
		element: <Dashboard />,
		isShowed: true,
	},
	{
		path: '/userAlerts',
		element: <UserAlerts />,
		isShowed: false,
	},
	{
		path: '/',
		label: 'Administrativo',
		children: [
			{ path: 'summaryServices', element: <SummaryServices />, label: 'Resumo de atendimentos', isShowed: true },

			{ path: 'attendants', element: <Attandants />, label: 'Atendentes', isShowed: true },

			{ path: 'tabs', element: <Tab/>, label: 'Tabulação', isShowed: true },

			{ path: 'openCalls', element: <OpenCalls />, label: 'Atendimentos em aberto', isShowed: true },
			{ path: 'serviceAnalyticalReport', element: <ServiceAnalyticalReport />, label: 'Relatório analítico de atendimento', isShowed: true },
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
