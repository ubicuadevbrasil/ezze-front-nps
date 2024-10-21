// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/Authentication/AuthenticationSlice'
import chatReducer from '@/features/chat/chatSlice'
import dashboardReducer from "@/features/Dashboard/DashboardSlice"

const store = configureStore({
	reducer: {
		auth: authReducer,
		chat: chatReducer,
		dashboard: dashboardReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
