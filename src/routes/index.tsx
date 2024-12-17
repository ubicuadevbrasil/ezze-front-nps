import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeObjects } from './routes' // Import the converted routes
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/store';
import { loadUserFromStorage } from '@/features/Authentication/AuthenticationSlice';

const RoutesPage: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(loadUserFromStorage());
    }, [dispatch]);

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
