import React, { useState } from 'react'
import { DatePickerWithRange } from './DatePickerWithRange'
import { Input } from './input'
import { Button } from './button'

const FilterSearchBar: React.FC = () => {
	const [IdAssistencia, setIdAssistencia] = useState<string>('')
	const [NomeCliente, setNomeCliente] = useState<string>('')
	const [CiaCliente, setCiaCliente] = useState<string>('')

	return (
		<div className="px-5 w-full h-16 gap-5 flex flex-row items-center justify-end">
			<DatePickerWithRange className="border-slate-400" />
			<Input className="w-32 border-slate-400" placeholder="Id da assistencia" value={IdAssistencia} onChange={(e) => setIdAssistencia(e.target.value)} />
			<Input className="w-32 border-slate-400" placeholder="Nome do cliente" value={NomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
			<Input className="w-32 border-slate-400" placeholder="CIA Cliente" value={CiaCliente} onChange={(e) => setCiaCliente(e.target.value)} />
			<Button className="text-lg bg-[#104b94]">Buscar</Button>
		</div>
	)
}

export default FilterSearchBar
