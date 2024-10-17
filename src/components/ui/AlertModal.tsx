import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { WarningCircle } from '@phosphor-icons/react'

interface AlertModalProps {
	children: React.ReactNode
	title: string
	description: string
	onConfirm: () => void // Ação para o botão "Sim"
	onCancel: () => void // Ação para o botão "Não"
}

export function AlertModal({ children, title, description, onConfirm, onCancel }: AlertModalProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader className="flex flex-col items-center">
					{/* Ícone de alerta vermelho */}
					<WarningCircle size={100} className="text-red-600" />
					<DialogTitle className="text-center text-lg">{title}</DialogTitle>
					<DialogDescription className="text-center">{description}</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<div className="w-full flex gap-4 justify-center">
						{/* Botão para cancelar, chamando a função onCancel */}
						<Button variant="outline" className="w-full p-2" onClick={onCancel}>
							Não
						</Button>
						{/* Botão para confirmar, chamando a função onConfirm */}
						<Button variant="destructive" className="w-full p-2" onClick={onConfirm}>
							Sim
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
