import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'

interface ToastWithTitle {
	title: string
	description: string
	className: string
	variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null | undefined
	titleButton: string
}

export function ToastWithTitle({ className, titleButton, title, description, variant }: ToastWithTitle) {
	const { toast } = useToast()

	return (
		<Button
			className={className}
			variant={variant}
			onClick={() => {
				toast({
					title: title,
					description: description,
				})
			}}>
			{titleButton}
		</Button>
	)
}
