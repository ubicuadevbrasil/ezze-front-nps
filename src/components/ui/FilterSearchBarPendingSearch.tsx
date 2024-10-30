import React, { useState } from 'react'
import { DatePickerWithRange } from './DatePickerWithRange'
import { Button } from './button'

const FilterSearchBarPendingSearch: React.FC = () => {
	const [IdAssistencia, setIdAssistencia] = useState<string>('')
	const [NomeCliente, setNomeCliente] = useState<string>('')
	const [CiaCliente, setCiaCliente] = useState<string>('')

	return (
		<div className="px-5 py-3 w-full gap-2 flex flex-row items-center justify-end">
			<DatePickerWithRange className="border-slate-400" />
			<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
					<label htmlFor="assistance" className=''>Id da assistência</label>
					<input id='assistance' className="w-full outline-none" placeholder="---" value={IdAssistencia} onChange={(e) => setIdAssistencia(e.target.value)} />
				</div>
			<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
				<label htmlFor="client_name" className=''>Nome do cliente</label>
				<input id='client_name' className="w-full outline-none" placeholder="---" value={NomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
			</div>
			<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
				<label htmlFor="client_company" className=''>CIA Cliente</label>
				<input id='client_company' className="w-full outline-none" placeholder="---" value={CiaCliente} onChange={(e) => setCiaCliente(e.target.value)} />
			</div>
			<Button className="text-lg bg-[#104b94] h-10 px-3">Buscar</Button>
		</div>
	)
}

export default FilterSearchBarPendingSearch
