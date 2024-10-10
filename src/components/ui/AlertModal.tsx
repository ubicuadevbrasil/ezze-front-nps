import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { WarningCircle } from '@phosphor-icons/react'

interface AlertModalProps {
	children: React.ReactNode
	title: string
	description: string
}

export function AlertModal({ children, description, title }: AlertModalProps) {
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
						<Button variant="outline" className="w-full">
							Não
						</Button>
						<Button variant="destructive" className="w-full">
							Sim
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
