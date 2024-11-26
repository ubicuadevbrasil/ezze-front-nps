import React from 'react'
import ReactDOM from 'react-dom'

type ConfirmationModalProps = {
	isVisible: boolean
	onConfirm: () => void
	onCancel: () => void
	message: string
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isVisible, onConfirm, onCancel, message }) => {
	if (!isVisible) return null

	return ReactDOM.createPortal(
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white rounded-md -lg shadow-lg w-full max-w-md p-6 relative">
				<div className="flex items-center justify-center mb-4">
					<span className="text-red-500 text-4xl mr-2">❗</span>
					<button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onCancel}>
						&times;
					</button>
				</div>
				<h2 className="text-xl font-semibold text-center mb-4">Tentativa de Contato</h2>
				<p className="text-center mb-6">{message}</p>
				<div className="flex justify-evenly">
					<button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md  hover:bg-gray-400" onClick={onCancel}>
						Não
					</button>
					<button className="bg-blue-500 text-white py-2 px-4 rounded-md  hover:bg-blue-600" onClick={onConfirm}>
						Sim
					</button>
				</div>
			</div>
		</div>,
		document.body
	)
}

export default ConfirmationModal
