import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesPage from './routes'
import { Provider } from 'react-redux'
import store from '@/app/store'
import { Toaster } from '@/components/ui/toaster'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

const App: React.FC = () => {

	return (
		<>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
						<RoutesPage />
						<Toaster />
					</BrowserRouter>
				</QueryClientProvider>
			</Provider>
		</>
	)
}

export { App }
