import React from 'react'
import NavBar from "@/components/ui/NavBar"
import MiniChat from '@/components/ui/MiniChat'
import FilterSearchBar from '@/components/ui/FilterSearchBar'

interface PendingSearchProps {
	children?: React.ReactNode
}

export const PendingSearchTemplate: React.FC<PendingSearchProps> = ({children}) => {
	return (
		<div className="w-screen h-screen flex flex-col">
			<NavBar />
			<FilterSearchBar />
			{children}
			<footer className="flex w-full justify-center py-2 bg-[#D9DDE5] absolute bottom-0 text-[10px]">{new Date().getFullYear()} - Powered by Ubicua ©</footer>
			<MiniChat />
		</div>
	)
}
