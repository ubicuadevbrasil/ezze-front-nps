import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CaretDown } from '@phosphor-icons/react'
import { Checkbox } from '@/components/ui/checkbox'
import { FilterProps } from '@/components/ui/FilterSearchBarPendingSearch'
import { FilterFormSearchBar } from './index'

const statusList = [
	{
		value: 'novo',
		label: 'Novo',
	},
	{
		value: 'andamento',
		label: 'Andamento',
	},
	{
		value: 'escalonado',
		label: 'Escalonado',
	},
	{
		value: 'concluido',
		label: 'Concluído',
	},
	{
		value: 'atrasado',
		label: 'Atrasado',
	},
]

const alertaList = [
	{
		value: 'promotor',
		label: 'Promotor',
	},
	{
		value: 'neutro',
		label: 'Neutro',
	},
	{
		value: 'detrator',
		label: 'Detrator',
	},
]

const SearchBar: React.FC<FilterProps> = ({register, handleSubmit, setSearchParams, setDate}) => {
	// const [IdAssistencia, setIdAssistencia] = useState<string>('')
	// const [NomeCliente, setNomeCliente] = useState<string>('')
	// const [CiaCliente, setCiaCliente] = useState<string>('')
	const [statusOpen, setStatusOpen] = useState(false)
	const [statusValue, setStatusValue] = useState('')
	const [alertaOpen, setAlertaOpen] = useState(false)
	const [alertaValue, setAlertaValue] = useState('')

	const handleFilter = (data: FilterFormSearchBar) => {
		setSearchParams(state => {
			if(data.clientName) {
				state.set('clientName', data.clientName)
			} else {
				state.delete('clientName')
			}

			if(data.clientCia) {
				state.set('clientCia', data.clientCia)
			} else {
				state.delete('clientCia')
			}

			if(data.assistanceId) {
				state.set('assistanceId', data.assistanceId)
			} else {
				state.delete('assistanceId')
			}

			state.set('page', '1')

			if(state.get('dateFrom') !== null && state.get('dateTo') !== null) {
				console.log("entrou")
				setDate({dateFrom: state.get('dateFrom'), dateTo: state.get('dateTo')})
			} else {
				setDate({dateFrom: null, dateTo: null})
				state.delete('dateFrom')
				state.delete('dateTo')
			}

			return state
		})
	}

	return (
		<form onSubmit={handleSubmit(handleFilter)} className="px-5 py-3 flex items-center justify-between">
			<div className="flex gap-2">
				{/* <DatePickerWithRange  className="border-slate-400" /> */}
				<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
					<label htmlFor="assignment" className=''>Atribuição</label>
					<input id='assignment' {...register('assignment')} className="w-full outline-none" placeholder="---" />
				</div>
				<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
					<label htmlFor="assistanceId" className=''>Id da assistência</label>
					<input id='assistanceId' {...register('assistanceId')} className="w-full outline-none" placeholder="---" />
				</div>
				<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
					<label htmlFor="clientCia" className=''>CIA Cliente</label>
					<input id='clientCia' {...register('clientCia')} className="w-full outline-none" placeholder="---" />
				</div>
				<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
					<label htmlFor="clientName" className=''>Nome do cliente</label>
					<input id='clientName' {...register('clientName')} className="w-full outline-none" placeholder="---" />
				</div>
				{/* Status */}
				<Popover open={statusOpen} onOpenChange={setStatusOpen}>
					<PopoverTrigger asChild className="border border-slate-400">
						<div className="flex w-32 h-10 items-center px-3 border border-slate-400 rounded-md -md bg-white">
							<div className="flex flex-col w-full text-[10px] leading-3  justify-center ">
								<span className="text-[10px] leading-3">Status</span>
								<div className="">{statusValue ? statusList.find((status) => status.value === statusValue)?.label : '---'}</div>
							</div>
							<CaretDown size={24} />
						</div>
						{/* <Button variant="outline" role="combobox" className=" justify-between text-gray-500 font-normal">
							{statusValue ? statusList.find((status) => status.value === statusValue)?.label : 'Status'}
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button> */}
					</PopoverTrigger>
					<PopoverContent className="w-[200px] p-3 border border-slate-400 flex gap-5 flex-col">
						{statusList.map((status) => (
							<div key={status.value} className="flex items-center space-x-2">
								<Checkbox
									className="border-gray-400"
									id={status.value}
									onSelect={(currentValue) => {
										setStatusValue(String(currentValue) === statusValue ? '' : String(currentValue))
										setStatusOpen(false)
									}}
								/>
								<label htmlFor="terms" className="text-sm text-gray-700 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
									{status.label}
								</label>
							</div>
						))}
					</PopoverContent>
				</Popover>

				{/* Alerta */}
				<Popover open={alertaOpen} onOpenChange={setAlertaOpen}>
					<PopoverTrigger asChild className="border border-slate-400">
						<div className="flex w-32 h-10 items-center px-3 border border-slate-400 rounded-md -md bg-white">
							<div className="flex flex-col w-full text-[10px] leading-3  justify-center ">
								<span className="text-[10px] leading-3">Alerta</span>
								<div className="">{alertaValue ? alertaList.find((alerta) => alerta.value === alertaValue)?.label : '---'}</div>
							</div>
							<CaretDown size={24} />
						</div>
						{/* <Button variant="outline" role="combobox" aria-expanded={statusOpen} className="w-[200px] justify-between text-gray-500 font-normal">
							{alertaValue ? alertaList.find((alerta) => alerta.value === alertaValue)?.label : 'Alerta'}
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button> */}
					</PopoverTrigger>
					<PopoverContent className="w-[200px] p-3 border border-slate-400  flex gap-5 flex-col">
						{alertaList.map((alerta) => (
							<div key={alerta.value} className="flex items-center space-x-2">
								<Checkbox
									className="border-gray-400"
									id={alerta.value}
									onSelect={(currentValue) => {
										setAlertaValue(String(currentValue) === alertaValue ? '' : String(currentValue))
										setAlertaOpen(false)
									}}
								/>
								<label htmlFor="terms" className="text-sm text-gray-700 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
									{alerta.label}
								</label>
							</div>
						))}
					</PopoverContent>
				</Popover>
			</div>
			<Button className="text-lg bg-[#104b94] h-10 px-3">Buscar</Button>
		</form>
	)
}

export default SearchBar
