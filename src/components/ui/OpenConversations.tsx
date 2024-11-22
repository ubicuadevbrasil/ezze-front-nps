import { selectConversationsError, selectConversationsList, selectConversationsLoading } from '@/features/OpenConversations/OpenConversationsSelector'
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from './button'
import { Spinner } from './Spinner'

const Index: React.FC = () => {
	const [isExpanded, setIsExpanded] = useState(false)
	const conversations = useSelector(selectConversationsList)
	const loading = useSelector(selectConversationsLoading)
	const error = useSelector(selectConversationsError)
	const [showBar, setShowBar] = useState(true)

	// const handleOpenChat = (id: string) => {
		// dispatch(setCurrentChat(id))
	// }

	const toggleExpansion = () => {
		setIsExpanded(!isExpanded)
		setShowBar(!showBar)
	}

	return (
		<div className={`fixed z-10 bottom-0 right-5 w-80 ${isExpanded ? 'h-96' : 'h-10'} transition-all duration-300 ease-in-out`}>
			{showBar && (
				<div className="bg-slate-100 border-slate-400 border text-slate-950 px-3 py-2 cursor-pointer rounded-t-2xl flex flex-row justify-between items-center" onClick={toggleExpansion}>
					Conversas abertas
					<CaretUp size={20} />
				</div>
			)}
			<div className={`bg-white border border-slate-400 rounded-2xl shadow-lg overflow-hidden h-full ${isExpanded ? 'block' : 'hidden'}`}>
				<div className="bg-slate-100 text-slate-950 p-3 flex justify-between items-center">
					<span>Support Chat</span>
					
					<Button variant={'ghost'} className="text-slate-950" onClick={toggleExpansion}>
						<CaretDown size={20} />
					</Button>
				</div>
				<div className="p-3 flex justify-center items-center h-full">{loading ? <Spinner /> : error ? <div>{error}</div> : conversations ? conversations?.map((conversation, index) => <Button id={index.toString()} >{conversation.name}</Button>) : (<p>Sem Conversas em aberto</p>)}</div>
			</div>
		</div>
	)
}

export default Index
// function dispatch(arg0: any) {
// 	throw new Error('Function not implemented.')
// }

