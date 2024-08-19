import React from 'react'
import NavBar from "@/components/ui/NavBar"
import MiniChat from '@/components/ui/MiniChat'

interface BaseProps {
	children?: React.ReactNode
}

export const BaseTemplate: React.FC<BaseProps> = ({children}) => {
	return (
		<div className="w-screen h-screen flex flex-col">
			<NavBar />
			{children}
			<footer className="flex w-full justify-center py-2 bg-[#D9DDE5] absolute bottom-0 text-[10px]">{new Date().getFullYear()} - Powered by Ubicua ©</footer>
			<MiniChat />
		</div>
	)
}
