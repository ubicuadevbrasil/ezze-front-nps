import React, { createContext, useState, useContext, useEffect, useCallback, useRef, ReactNode } from 'react'
import axios from 'axios'

// Tipos para status de atividade
type UserStatus = 'online' | 'away' | 'offline'

interface ActivityContextType {
	status: UserStatus
}

interface ActivityProviderProps {
	children: ReactNode
	apiUrl: string
}

export const ActivityContext = createContext<ActivityContextType | undefined>(undefined)

// Provider de atividade para toda a aplicação
export const ActivityProvider: React.FC<ActivityProviderProps> = ({ children, apiUrl }) => {
	const [status, setStatus] = useState<UserStatus>('online')
	const [lastActivityTime, setLastActivityTime] = useState(Date.now())
	const intervalRef = useRef<NodeJS.Timeout | null>(null)

	const sendActivitySignal = useCallback(async () => {
		try {
			// Obter token
			const token = localStorage.getItem('token')

			// Se não tiver token, não enviar
			//if (!token) return

			// Enviar requisição com token no header
			await axios.post(
				apiUrl,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
		} catch (error) {
			console.error('Erro ao enviar sinal de atividade:', error)
		}
	}, [apiUrl, localStorage.getItem('token')])

	// Iniciar envio de sinais periódicos
	const startPeriodicSignals = useCallback(() => {
		// Para envio anterior se existir
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
		}

		// Iniciar novo intervalo de envio a cada 5 segundos
		intervalRef.current = setInterval(() => {
			sendActivitySignal()
		}, 5000)
	}, [sendActivitySignal])

	// Parar envio de sinais
	const stopPeriodicSignals = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current)
			intervalRef.current = null
		}
	}, [])

	// Atualizar status e gerenciar sinais
	const updateStatus = useCallback(
		(newStatus: UserStatus) => {
			setStatus((prevStatus) => {
				if (prevStatus !== newStatus) {
					// Se ficar inativo, parar de enviar sinais
					if (newStatus === 'away') {
						stopPeriodicSignals()
					} else {
						// Se voltar a ficar ativo, reiniciar sinais
						startPeriodicSignals()
					}
					return newStatus
				}
				return prevStatus
			})
		},
		[startPeriodicSignals, stopPeriodicSignals]
	)

	// Função para marcar atividade
	const handleActivity = useCallback(() => {
		const currentTime = Date.now()
		setLastActivityTime(currentTime)

		// Se estava away, voltar para online
		if (status === 'away') {
			updateStatus('online')
		}

		// Enviar sinal imediatamente
		sendActivitySignal()
	}, [status, updateStatus, sendActivitySignal])

	// Efeito principal de monitoramento
	useEffect(() => {
		// Configurações de timeout
		const INACTIVE_TIMEOUT = 5 * 60 * 1000 // 5 minutos

		// Iniciar envio de sinais
		startPeriodicSignals()

		// Adicionar listeners de atividade
		const activityEvents: (keyof WindowEventMap)[] = ['mousedown', 'keydown', 'scroll', 'touchstart', 'mousemove']

		activityEvents.forEach((event) => {
			window.addEventListener(event, handleActivity)
		})

		// Listener para visibilidade da página
		const handleVisibilityChange = () => {
			if (document.hidden) {
				updateStatus('away')
			} else {
				updateStatus('online')
				sendActivitySignal()
			}
		}
		document.addEventListener('visibilitychange', handleVisibilityChange)

		// Verificar inatividade periodicamente
		const inactivityCheck = setInterval(() => {
			const currentTime = Date.now()
			const timeSinceLastActivity = currentTime - lastActivityTime

			if (timeSinceLastActivity > INACTIVE_TIMEOUT) {
				updateStatus('away')
			}
		}, 60000)

		// Limpar listeners e intervalos
		return () => {
			activityEvents.forEach((event) => {
				window.removeEventListener(event, handleActivity)
			})
			document.removeEventListener('visibilitychange', handleVisibilityChange)
			clearInterval(inactivityCheck)
			stopPeriodicSignals()
		}
	}, [handleActivity, updateStatus, lastActivityTime, sendActivitySignal, startPeriodicSignals, stopPeriodicSignals])

	return <ActivityContext.Provider value={{ status }}>{children}</ActivityContext.Provider>
}

// Hook personalizado para usar o contexto de atividade
export const useActivity = () => {
	const context = useContext(ActivityContext)
	if (context === undefined) {
		throw new Error('useActivity must be used within an ActivityProvider')
	}
	return context
}


