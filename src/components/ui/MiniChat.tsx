import { CaretUp, PaperPlaneRight, PaperPlaneTilt, X } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'

const MiniChat: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [showBar, setShowBar] = useState(true)

	const toggleChat = () => {
		if (isOpen) {
			setIsOpen(false)
			setTimeout(() => setShowBar(true), 300) // Duração da animação em milissegundos
		} else {
			setShowBar(false)
			setTimeout(() => setIsOpen(true), 50) // Pequeno atraso para garantir que a barra desapareça antes da animação
		}
	}

	useEffect(() => {
		if (!isOpen) {
			setShowBar(true)
		}
	}, [isOpen])

	return (
		<div className={`fixed bottom-0 right-5 w-80 ${isOpen ? 'h-96' : 'h-10'} transition-all duration-300 ease-in-out`}>
			{showBar && (
				<div className="bg-slate-100 border-slate-400 border text-slate-950 px-3 py-2 cursor-pointer rounded-t-2xl flex flex-row justify-between items-center" onClick={toggleChat}>
					Conversas abertas
					<CaretUp size={20} />
				</div>
			)}
			<div className={`bg-white border border-slate-400 rounded-2xl shadow-lg overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
				<div className="bg-slate-100 text-slate-950 p-3 flex justify-between items-center">
					<span>Support Chat</span>
					<button className="text-slate-950" onClick={toggleChat}>
						<X size={20} />
					</button>
				</div>
				<div className="p-3 h-64 overflow-y-auto">
					<p>Welcome to our support chat!</p>
					{/* Add more chat content here */}
				</div>
				<div className="p-3 flex">
					<input type="text" placeholder="Type a message..." className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none" />
					<button className="bg-slate-100 text-slate-950 p-2 rounded-r-lg">
						<PaperPlaneRight size={20} />
					</button>
				</div>
			</div>
		</div>
	)
}


export default MiniChat
