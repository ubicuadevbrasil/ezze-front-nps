import { RootState } from '@/app/store'
import { selectCurrentChat, selectIsChatOpen } from '@/features/chat/chatSelectors'
import { closeChat, addMessage, openChat } from '@/features/chat/chatSlice'
import { CaretUp, PaperPlaneRight, X } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MiniChat: React.FC = () => {
	const currentChat = useSelector((state: RootState) => selectCurrentChat(state))
	// const messages = useSelector((state: RootState) => selectMessagesByPhone(currentChat?.telefone || 0)(state))
	const isOpen = useSelector(selectIsChatOpen)
	const dispatch = useDispatch()
	const [showBar, setShowBar] = useState(true)
	const [message, setMessage] = useState('')

	const toggleChat = () => {
		if (isOpen) {
			dispatch(closeChat())
		} else {
			setShowBar(false)
			dispatch(openChat())
		}
	}

	useEffect(() => {
		if (!isOpen) {
			setShowBar(true)
		} else {
			setShowBar(false)
		}
	}, [isOpen])

	const handleSendMessage = () => {
		if (currentChat && message.trim()) {
			dispatch(addMessage({ telefone: currentChat.telefone, message }))
			setMessage('')
		}
	}

	return (
		<div className={`fixed z-10 bottom-0 right-5 w-80 ${isOpen ? 'h-96' : 'h-10'} transition-all duration-300 ease-in-out`}>
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
					<p>{currentChat?.telefone}</p>
				</div>
				<div className="p-3 flex">
					<input type="text" placeholder="Type a message..." className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none" value={message} onChange={(e) => setMessage(e.target.value)} />
					<button className="bg-slate-100 text-slate-950 p-2 rounded-r-lg" onClick={handleSendMessage}>
						<PaperPlaneRight size={20} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default MiniChat
