import React, { useEffect, useState } from 'react'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Chat } from '@phosphor-icons/react'
import { useDispatch } from 'react-redux'
import { IPedingSearch } from './columns'
import { setCurrentChat } from '@/features/chat/chatSlice'
import Pagination from '@/components/ui/PaginationItem'
import { useNavigate } from 'react-router-dom'

interface DataTableProps<TData> {
	columns: ColumnDef<TData>[]
	data: TData[]
}

export function DataTable<TData extends IPedingSearch>({ columns, data }: DataTableProps<TData>) {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 7 // Exibir no máximo 7 itens por página

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

	const handleButtonClick = (data: IPedingSearch) => {
		navigate('clientDetails', {state: data})
	}

	const handleOpenChat = (dataFone: IPedingSearch) => {
		dispatch(setCurrentChat(dataFone))
	}

	useEffect(() => {
		setCurrentPage(1)
	}, [])


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
											) : cell.column.id === 'conversa' ? (
												<Button className="bg-[#104b94] border-0 w-full px-5 py-1" variant={'outline'} onClick={() => handleOpenChat(row.original)}>
													<Chat color="#f1f1f1" size={20} />
												</Button>
											) : cell.column.id === 'tentativaContato' ? (
												<Button className="bg-[#a2b7d5] border border-[#104b94] rounded py-1 px-4 text-xs justify-center w-full" variant={'outline'} onClick={() => handleButtonClick(row.original)}>
													Mais Detalhes
												</Button>
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
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			</div>
			<div className="flex justify-around items-center p-4">
				<div className="text-sm text-gray-600 ">Total de alertas: {data.length}</div>
				<Pagination />
			</div>
		</div>
	)
}
