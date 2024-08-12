import { AuthenticationLayout } from '@/pages/layouts/Authentication'
import { Login } from '@/pages/authentication/Login'
import { RecoverPassword } from '@/pages/authentication/RecoverPassword'
import { NewPassword } from '@/pages/authentication/NewPassoword'
import PendingSearch from '@/pages/PendingSearch'
import { RouteObject } from 'react-router-dom'
import ClientDetails from '@/pages/ClientDetails'

export type CustomRoute = {
	path: string
	element?: React.ReactElement
	label?: string
	children?: CustomRoute[],
	isShowed?: boolean
}

export const routes: CustomRoute[] = [
	{
		path: '/au',
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
		label: 'Home',
		isShowed: true,
	},
	{
		path: '/services',
		label: 'Services',
		children: [
			{ path: 'service1', element: <div />, label: 'Service 1' },
			{ path: 'service2', element: <div />, label: 'Service 2' },
		],
		isShowed: true,
	},
	{
		path: '/clientDetails/',
		label:'',
		element: <ClientDetails/>,
		isShowed: false
	}
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
