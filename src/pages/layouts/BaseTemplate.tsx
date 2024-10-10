import React from 'react'
import NavBar from "@/components/ui/NavBar"

interface BaseProps {
	children?: React.ReactNode
}

export const BaseTemplate: React.FC<BaseProps> = ({children}) => {
	return (
		<div className="w-screen h-screen flex flex-col">
			<NavBar />
			{children}
			<footer className="flex w-full justify-center py-2 bg-[#D9DDE5] mt-auto text-[10px]">{new Date().getFullYear()} - Powered by Ubicua ©</footer>
		</div>
	)
}
