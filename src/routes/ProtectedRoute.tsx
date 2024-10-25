import { RootState } from '@/app/store'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

// Função que verifica se o usuário está autenticado
// const isAuthenticated = () => {
// 	const token = localStorage.getItem('token')
// 	const refreshToken = localStorage.getItem('refreshToken')
// 	return !!token && !!refreshToken // Retorna true se ambos os tokens existirem
// }

interface ProtectedRouteProps {
	children: React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
	
	// if (!isAuthenticated()) {
	// 	// Se não estiver autenticado, redireciona para a rota /auth
	// 	return <Navigate to="/auth" replace />
	// }

	// // Se estiver autenticado, renderiza o componente solicitado
	// return children
	const isAuthenticated = useSelector((state: RootState) => {
		console.log("state",state)
		return state.auth.isAuthenticated
	});
	console.log("isAuthenticate",isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/auth" />;
}

export default ProtectedRoute
