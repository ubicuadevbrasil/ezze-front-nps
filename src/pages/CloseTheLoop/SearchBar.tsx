import React, { useState } from 'react'
import { DatePickerWithRange } from '@/components/ui/DatePickerWithRange'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Check } from '@phosphor-icons/react'
import * as utils from '@/lib/utils'
import { ChevronsUpDown } from 'lucide-react'
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
		<div className="px-5 w-full h-16 g flex flex-row items-center justify-between">
			<div className="flex flex-row gap-5">
				<DatePickerWithRange className="border-slate-400" />
				<Input className="w-36 border-slate-400" placeholder="Atribuição" value={IdAssistencia} onChange={(e) => setIdAssistencia(e.target.value)} />
				<Input className="w-36 border-slate-400" placeholder="Id da assistencia" value={IdAssistencia} onChange={(e) => setIdAssistencia(e.target.value)} />
				<Input className="w-36 border-slate-400" placeholder="CIA Cliente" value={CiaCliente} onChange={(e) => setCiaCliente(e.target.value)} />
				<Input className="w-36 border-slate-400" placeholder="Nome do cliente" value={NomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
				{/* Status */}
				<Popover open={statusOpen} onOpenChange={setStatusOpen}>
					<PopoverTrigger asChild className="border border-slate-400">
						<Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between text-gray-500 font-normal">
							{statusValue ? statusList.find((status) => status.value === statusValue)?.label : 'Status'}
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-[200px] p-0 border border-slate-400 flex gap-5 flex-col p-3">
						{statusList.map((status) => (
							<div key={status.value} className="flex items-center space-x-2">
								<Checkbox
									className="border-gray-400"
									id={status.value}
									onSelect={(currentValue) => {
										setStatusValue(currentValue === statusValue ? '' : currentValue)
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
						<Button variant="outline" role="combobox" aria-expanded={statusOpen} className="w-[200px] justify-between text-gray-500 font-normal">
							{alertaValue ? alertaList.find((alerta) => alerta.value === alertaValue)?.label : 'Alerta'}
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-[200px] p-0 border border-slate-400  flex gap-5 flex-col p-3">
						{alertaList.map((alerta) => (
							<div key={alerta.value} className="flex items-center space-x-2">
								<Checkbox
									className="border-gray-400"
									id={alerta.value}
									onSelect={(currentValue) => {
										setStatusValue(currentValue === alertaValue ? '' : currentValue)
										setStatusOpen(false)
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
			<Button className="text-lg bg-[#104b94]">Buscar</Button>
		</div>
	)
}

export default SearchBar
