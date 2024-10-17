import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	preview: {
		// defaultPort: 3000,
		host: true,
		port: 3000
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
