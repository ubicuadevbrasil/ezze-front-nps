import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesPage from './routes'
import { Provider } from 'react-redux'
import store from '@/app/store'
import { Toaster } from '@/components/ui/toaster'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { ActivityProvider } from './components/ui/activateVerification'
import { API_BASE_URL } from './services/apiRoutes'

const App: React.FC = () => {
	return (
		<>
			<ActivityProvider apiUrl={`${API_BASE_URL}/api/employees/update-user-activity`}>
				<Provider store={store}>
					<QueryClientProvider client={queryClient}>
						<BrowserRouter>
							<RoutesPage />
							<Toaster />
						</BrowserRouter>
					</QueryClientProvider>
				</Provider>
			</ActivityProvider>
		</>
	)
}

export { App }
