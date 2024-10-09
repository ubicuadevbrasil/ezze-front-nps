import React from 'react'
import NavBar from "@/components/ui/NavBar"

interface BaseProps {
	children?: React.ReactNode
}

export const BaseTemplate: React.FC<BaseProps> = ({children}) => {
	return (
		<div className="max-w-screen min-h-screen bg-[#F1F3FE] flex flex-col">
			<NavBar />
			{children}
			<footer className="flex w-full h-8 justify-center py-2 bg-[#D9DDE5] fixed bottom-0 text-[10px]">{new Date().getFullYear()} - Powered by Ubicua ©</footer>

		</div>
	)
}
