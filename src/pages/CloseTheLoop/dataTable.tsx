import { useState } from 'react'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Chat } from '@phosphor-icons/react'
// import { useDispatch } from 'react-redux'
import { ICloseTheLoop } from './columns'
import Pagination from '@/components/ui/PaginationItem'
import { useNavigate } from 'react-router-dom'
import { Status } from '@/components/ui/Status'

interface DataTableProps<TData> {
	columns: ColumnDef<TData>[]
	data: TData[]
}

export function DataTable<TData extends ICloseTheLoop>({ columns, data }: DataTableProps<TData>) {
	// const dispatch = useDispatch()
	const navigate = useNavigate()
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 7

	// Calcula o número total de páginas
	const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage))

	// Corrige a página atual se estiver fora dos limites
	const safeCurrentPage = Math.min(currentPage, totalPages)

	// Calcula os índices de início e fim para a página atual
	const startIndex = (safeCurrentPage - 1) * itemsPerPage
	const endIndex = Math.min(startIndex + itemsPerPage, data.length)
	const paginatedData = data.slice(startIndex, endIndex)

	const table = useReactTable({
		data: paginatedData,
		columns,
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<div>
			<div className="border rounded-md border-slate-400">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row, index) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
									{row.getVisibleCells().map((cell) => {
										const cellValue = cell.getValue()

										return (
											<TableCell key={cell.id} className={index % 2 ? '' : 'bg-[#F1f3fE]'}>
												{cell.column.id === 'dataPrimeroDisparo' && cellValue instanceof Date ? (
													cellValue.toLocaleDateString()
												) : cell.column.id === 'contato' ? (
														<Button className="bg-[#104b94] border-0 w-full px-5 py-1" variant={'outline'}>
															<Chat color="#f1f1f1" size={14} />
														</Button>
												) : cell.column.id === 'status' || cell.column.id === 'alerta' ? (
													<div onClick={() => navigate('/userAlerts', { state: cell.row.original })} className="cursor-pointer py-1">
														<Status data={cellValue as string} />
													</div>
												) : (
													flexRender(cell.column.columnDef.cell, cell.getContext())
												)}
											</TableCell>
										)
									})}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="text-center text-xs">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center mt-4 mx-1">
				<div className="text-xs w-full text-gray-600">Total de alertas: {data.length}</div>
				<Pagination currentPage={safeCurrentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
			</div>
		</div>
	)
}


