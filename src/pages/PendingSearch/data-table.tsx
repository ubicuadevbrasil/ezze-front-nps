import { ColumnDef } from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Chat } from '@phosphor-icons/react'
import { IPedingSearch } from './columns'
import Pagination from '@/components/ui/PaginationItem' // Ajuste o caminho se necessário
import { SetURLSearchParams } from 'react-router-dom'
import { GetClientsResponse } from '../api/get-clients'
import { format } from 'date-fns'

interface DataTableProps<TableCellata> {
	columns: ColumnDef<TableCellata>[]
	result?: GetClientsResponse
	// clientName?: string
	// clientCia?: string
	// assistanceId?: string
	setSearchParams: SetURLSearchParams
}

export function DataTable<TableCellata extends IPedingSearch>({ columns, result, setSearchParams }: DataTableProps<TableCellata>) {
	// const dispatch = useDispatch<AppDispatch>()
	// const navigate = useNavigate()
	// const [currentPage, setCurrentPage] = useState(1)
	// const itemsPerPage = 7 // Exibir no máximo 7 itens por página

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

	// const handleButtonClick = (data: IPedingSearch) => {
	// 	navigate('clienTableCelletails', { state: data })
	// }

	// const handleOpenChat = (dataFone: IPedingSearch) => {
	// 	dispatch(setCurrentChat(dataFone))
	// }

	function handlePagination(pageNumber: number){
		setSearchParams(prev => {
			prev.set('page', pageNumber.toString())
			return prev
		})
	}

	// Reseta a página atual quando os dados mudam
	// useEffect(() => {
	// 	setCurrentPage(1)
	// }, [result])

	return (
		<div>
			<div className="border rounded-md -md border-slate-400">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID da Assistência</TableHead>
							<TableHead>Nome do Cliente</TableHead>
							<TableHead>CIA Cliente</TableHead>
							<TableHead>Telefone do Cliente</TableHead>
							<TableHead>N° de assistência</TableHead>
							<TableHead>Data do primeiro disparo</TableHead>
							<TableHead>Tipo de Serviço</TableHead>
							<TableHead>Formato (E-mail ou SMS)</TableHead>
							<TableHead>Teve Submit (Sim/Não)</TableHead>
							<TableHead>Tentativa Contato</TableHead>
							<TableHead>Conversa</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{result && result.clients.length > 0 ? (
							result.clients.map((client) => (
								<TableRow key={client.id}>
									<TableCell>{client.id}</TableCell>
									<TableCell>{client.clientName}</TableCell>
									<TableCell>{client.clientCIA}</TableCell>
									<TableCell>{client.phoneNumber}</TableCell>
									<TableCell>{client.assistanceNumber}</TableCell>
									<TableCell>{format(client.date, 'dd/MM/yyyy')}</TableCell>
									<TableCell>{client.serviceType}</TableCell>
									<TableCell>{client.format}</TableCell>
									<TableCell>{client.status ? 'Sim' : 'Não'}</TableCell>
									<TableCell>
										<Button className="bg-[#a2b7d5] border border-[#104b94] rounded-md  py-1 px-4 text-xs justify-center w-full" variant={'outline'} onClick={() => {}}>
											Mais Detalhes
										</Button>
									</TableCell>
									<TableCell>
										<Button className="bg-[#104b94] border-0 w-full px-5 py-1 hover:bg-slate-500" variant={'outline'} onClick={() => {}}>
											<Chat color="#f1f1f1" size={20} />
										</Button>
									</TableCell>
								</TableRow>
								// 	<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
								// 		{row.getVisibleCells().map((cell) => {
								// 			const cellValue = cell.getValue()

								// 			return (
								// 				<TableCell key={cell.id} className={index % 2 ? '' : 'bg-[#F1f3fE]'}>
								// 					{cell.column.id === 'dataPrimeroDisparo' && cellValue instanceof Date ? (
								// 						cellValue.toLocaleDateString()
								// 					) : cell.column.id === 'conversa' ? (
								// 						<Button className="bg-[#104b94] border-0 w-full px-5 py-1 hover:bg-slate-500" variant={'outline'} onClick={() => handleOpenChat(row.original)}>
								// 							<Chat color="#f1f1f1" size={20} />
								// 						</Button>
								// 					) : cell.column.id === 'tentativaContato' ? (
								// 						<Button className="bg-[#a2b7d5] border border-[#104b94] rounded-md  py-1 px-4 text-xs justify-center w-full" variant={'outline'} onClick={() => handleButtonClick(row.original)}>
								// 							Mais Detalhes
								// 						</Button>
								// 					) : (
								// 						flexRender(cell.column.columnDef.cell, cell.getContext())
								// 					)}
								// 				</TableCell>
								// 			)
								// 		})}
								// 	</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
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
