import { ColumnDef } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Chat } from '@phosphor-icons/react'
// import { useDispatch } from 'react-redux'
import { ICloseTheLoop } from './columns'
import Pagination from '@/components/ui/PaginationItem'
import { SetURLSearchParams } from 'react-router-dom'
import { Status } from '@/components/ui/Status'
import { GetClientsResponse } from '../api/get-clients'

interface DataTableProps<TData> {
	columns: ColumnDef<TData>[]
	result?: GetClientsResponse
	// data: TData[]
	setSearchParams: SetURLSearchParams
}

export function DataTable<TData extends ICloseTheLoop>({ columns, result, setSearchParams }: DataTableProps<TData>) {
	// const dispatch = useDispatch()
	// const navigate = useNavigate()
	// const [currentPage, setCurrentPage] = useState(1)
	// const itemsPerPage = 7

	// Calcula o número total de páginas
	// const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage))

	// Corrige a página atual se estiver fora dos limites
	// const safeCurrentPage = Math.min(currentPage, totalPages)

	// Calcula os índices de início e fim para a página atual
	// const startIndex = (safeCurrentPage - 1) * itemsPerPage
	// const endIndex = Math.min(startIndex + itemsPerPage, data.length)
	// const paginatedData = data.slice(startIndex, endIndex)

	// const table = useReactTable({
	// 	data: paginatedData,
	// 	columns,
	// 	getCoreRowModel: getCoreRowModel(),
	// })

	function handlePagination(pageNumber: number){
		setSearchParams(prev => {
			prev.set('page', pageNumber.toString())
			return prev
		})
	}

	return (
		<div>
			<div className="border rounded-md -md border-slate-400">
				<Table>
					<TableHeader>
					<TableRow>
									<TableHead>ID da Assistência</TableHead>
									<TableHead>Nome do Cliente</TableHead>
									<TableHead>CIA Cliente</TableHead>
									<TableHead>Email</TableHead>
									<TableHead>Comentário</TableHead>
									<TableHead>Atribuição</TableHead>
									<TableHead>Tentativa Contato</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Alerta</TableHead>
									<TableHead>Contato</TableHead>
							</TableRow>
					</TableHeader>
					<TableBody>
						{
							result && result?.clients.length > 0 ? (
								result.clients.map((client) => (
									<TableRow key={client.id}>
										<TableCell>{client.id}</TableCell>
										<TableCell>{client.clientName}</TableCell>
										<TableCell>{client.clientCIA}</TableCell>
										<TableCell>{client.clientEmail}</TableCell>
										<TableCell>---</TableCell>
										<TableCell>---</TableCell>
										<TableCell>{client.contactAttempt && client.contactAttempt.length}</TableCell>
										<TableCell><Status data={'Concluído'} /></TableCell>
										<TableCell>
											<Status data={'Promotor'} />
										</TableCell>
										<TableCell>
											<Button className="bg-[#104b94] border-0 w-full px-5 py-1 hover:bg-slate-500" variant={'outline'} onClick={() => {}}>
												<Chat color="#f1f1f1" size={20} />
											</Button>
										</TableCell>
									</TableRow>
							))
							) : (
								<TableRow>
									<TableCell colSpan={columns.length} className="text-center text-xs">
										No results.
									</TableCell>
								</TableRow>
							)
						}
					</TableBody>
				</Table>
			</div>
			<div className="flex justify-between items-center p-4">
				{result && (
					<>
						<div className="text-sm text-gray-600 text-nowrap">Total de alertas: {result?.totalItens}</div>
						<Pagination currentPage={result.PageNumber} totalPages={result?.totalPages ? result.totalPages : 0} onPageChange={handlePagination} />
					</>
				)}
			</div>
		</div>
	)
}


