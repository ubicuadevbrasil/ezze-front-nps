import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeObjects } from './routes' // Import the converted routes

const RoutesPage: React.FC = () => {
	return (
		<Routes>
			{routeObjects.map((route, index) => (
				<Route key={index} path={route.path} element={route.element}>
					{route.children?.map((childRoute, childIndex) => <Route key={childIndex} path={childRoute.path} element={childRoute.element} />)}
				</Route>
			))}
		</Routes>
	)
}

export default RoutesPage
