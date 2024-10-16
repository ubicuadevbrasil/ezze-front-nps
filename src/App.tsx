import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesPage from './routes'
import { Provider } from 'react-redux'
import store from './app/store'
import { Toaster } from '@/components/ui/toaster'

const App: React.FC = () => {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<RoutesPage />
					<Toaster />
				</BrowserRouter>
			</Provider>
		</>
	)
}

export { App }
