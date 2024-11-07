import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'

interface PaginationComponentProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => Promise<void> | void
}

export default function PaginationComponent({ currentPage, totalPages, onPageChange }: PaginationComponentProps) {
	return (
		<Pagination className="justify-end">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						
						onClick={(e) => {
							if (currentPage > 1) {
								onPageChange(currentPage - 1)
							} else {
								e.preventDefault() // Previne a navegação
							}
						}}
						className={currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}
					/>
				</PaginationItem>

				{/* Renderiza os números das páginas */}
				{Array.from({ length: totalPages }, (_, index) => (
					<PaginationItem key={index + 1}>
						<PaginationLink className={`rounded px-4 py-2 text-sm ${currentPage === index + 1 ? 'bg-[#1b335e] text-white' : ''}`} onClick={() => onPageChange(index + 1)}>
							{index + 1}
						</PaginationLink>
					</PaginationItem>
				))}

				<PaginationItem>
					<PaginationNext
						onClick={(e) => {
							if (currentPage < totalPages) {
								onPageChange(currentPage + 1)
							} else {
								e.preventDefault() // Previne a navegação
							}
						}}
						className={currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}
