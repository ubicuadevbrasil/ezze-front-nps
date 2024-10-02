// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/Authentication/AuthenticationSlice'
import chatReducer from '@/features/chat/chatSlice'

const store = configureStore({
	reducer: {
		auth: authReducer,
		chat: chatReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
