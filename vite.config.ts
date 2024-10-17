import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	base: '/',
	plugins: [react()],
	preview: {
		// defaultPort: 3000,
		host: '0.0.0.0',
		port: 5173,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
