import React from 'react'
import { Navigate } from 'react-router-dom'

// Função que verifica se o usuário está autenticado
const isAuthenticated = () => {
	const token = localStorage.getItem('token')
	const refreshToken = localStorage.getItem('refreshToken')
	return !!token && !!refreshToken // Retorna true se ambos os tokens existirem
}

interface ProtectedRouteProps {
	children: React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
	if (!isAuthenticated()) {
		// Se não estiver autenticado, redireciona para a rota /auth
		return <Navigate to="/auth" replace />
	}

	// Se estiver autenticado, renderiza o componente solicitado
	return children
}

export default ProtectedRoute
