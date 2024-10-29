import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeObjects } from './routes'

const RoutesPage: React.FC = () => {
	const renderRoutes = (routes: typeof routeObjects) => {
		return routes.map((route, index) => (
			<Route key={index} path={route.path} element={route.element}>
				{route.children && renderRoutes(route.children)}
			</Route>
		))
	}

	return <Routes>{renderRoutes(routeObjects)}</Routes>
}

export default RoutesPage
