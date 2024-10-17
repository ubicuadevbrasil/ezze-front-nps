import React, { useState } from 'react'
import { DatePickerWithRange } from '@/components/ui/DatePickerWithRange'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CaretDown } from '@phosphor-icons/react'
import { Checkbox } from '@/components/ui/checkbox'

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

const SearchBar: React.FC = () => {
	const [IdAssistencia, setIdAssistencia] = useState<string>('')
	const [NomeCliente, setNomeCliente] = useState<string>('')
	const [CiaCliente, setCiaCliente] = useState<string>('')
	const [statusOpen, setStatusOpen] = React.useState(false)
	const [statusValue, setStatusValue] = React.useState('')
	const [alertaOpen, setAlertaOpen] = React.useState(false)
	const [alertaValue, setAlertaValue] = React.useState('')

	return (
		<div className="px-5 py-3 flex items-center justify-between">
			<div className="flex gap-2">
				<DatePickerWithRange className="border-slate-400" />
				<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
					<label htmlFor="assignment" className=''>Atribuição</label>
					<input id='assignment' className="w-full outline-none" placeholder="---" value={IdAssistencia} onChange={(e) => setIdAssistencia(e.target.value)} />
				</div>
				<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
					<label htmlFor="assistance" className=''>Id da assistência</label>
					<input id='assistance' className="w-full outline-none" placeholder="---" value={IdAssistencia} onChange={(e) => setIdAssistencia(e.target.value)} />
				</div>
				<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
					<label htmlFor="client_company" className=''>CIA Cliente</label>
					<input id='client_company' className="w-full outline-none" placeholder="---" value={CiaCliente} onChange={(e) => setCiaCliente(e.target.value)} />
				</div>
				<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
					<label htmlFor="client_name" className=''>Nome do cliente</label>
					<input id='client_name' className="w-full outline-none" placeholder="---" value={NomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
				</div>
				{/* Status */}
				<Popover open={statusOpen} onOpenChange={setStatusOpen}>
					<PopoverTrigger asChild className="border border-slate-400">
						<div className='flex w-32 h-10 items-center px-3 border border-slate-400 rounded-md bg-white'>
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
						<div className='flex w-32 h-10 items-center px-3 border border-slate-400 rounded-md bg-white'>
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
		</div>
	)
}

export default SearchBar
