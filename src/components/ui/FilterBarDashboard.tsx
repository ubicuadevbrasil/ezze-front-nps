import { CaretDown } from "@phosphor-icons/react"
import { Button } from "./button"
import { Checkbox } from "./checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
//import { DatePickerWithRange } from "./DatePickerWithRange"
import { useState } from "react"
//import { DashboardFilter } from "@/models/dashboardFilters"
//import { useAppDispatch } from "@/hooks/hooks"
//import { fetchDashboard } from "@/features/Dashboard/DashboardSlice"
//import { SetURLSearchParams } from "react-router-dom"
//import { DashboardResponse } from "@/models/dashboardResponse"
//import { DashboardAPI } from "@/features/Dashboard/DashboardAPI"
//import { useQuery } from "@tanstack/react-query"

const ciaList = [
	{
		value: 'cia1',
		label: 'Cia 1',
	},
	{
		value: 'cia2',
		label: 'Cia 2',
	},
	// Continue com os outros valores...
]

const negociosList = [
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

const motivosList = [
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

export const FilterSearchBar: React.FC = () => {
	const [ciaOpen, setCiaOpen] = useState(false)
	const [ciaValue, setCiaValue] = useState('')
	const [negociosOpen, setNegociosOpen] = useState(false)
	const [negociosValue, setNegociosValue] = useState('')
	const [motivosOpen, setMotivosOpen] = useState(false)
	const [motivosValue, setMotivosValue] = useState('')
	// const [DateStart, setDataStart] = useState<Date>()
	// const [DateEnd, setDataEnd] = useState<Date>()

	// useQuery<DashboardResponse>(
	// 	{ queryKey: ['searchDashboard'],
	// 	queryFn: () =>
	// 		DashboardAPI.get({
	// 			cia: ciaValue,
	// 			negocio: negociosValue,
	// 			motivo: motivosValue,
	// 			dataStart: DateStart as Date,
	// 			dataEnd: DateEnd as Date,
	// 		}).then((res) => res.data)}
	// )

	return (
		<div className="px-5 py-3 w-full gap-2 flex flex-row items-center justify-end bg-[#F1F3FE]">
			{/* <DatePickerWithRange className="border-slate-400" setEnd={setDataEnd} setStart={setDataStart} /> */}
			{/* Cia */}
			<Popover open={ciaOpen} onOpenChange={setCiaOpen}>
				<PopoverTrigger asChild>
					<div className="flex w-32 h-10 items-center px-3 border border-slate-400 rounded-md -md bg-white">
						<div className="flex flex-col w-full text-[10px] leading-3  justify-center ">
							<span className="text-[10px] leading-3">Cia</span>
							<div className="">{ciaValue ? ciaList.find((cia) => cia.value === ciaValue)?.label : '---'}</div>
						</div>
						<CaretDown size={24} />
					</div>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] flex gap-5 flex-col p-3">
					{ciaList.map((cia) => (
						<div key={cia.value} className="flex items-center space-x-2">
							<Checkbox
								className="border-gray-400"
								id={cia.value}
								value={cia.value}
								checked={ciaValue === cia.value}
								onChange={(e) => {
									const target = e.target as HTMLInputElement
									const currentValue = target.value
									setCiaValue(currentValue === ciaValue ? '' : currentValue)
									setCiaOpen(false)
								}}
							/>
							<label htmlFor={cia.value} className="text-sm text-gray-700 font-medium leading-none">
								{cia.label}
							</label>
						</div>
					))}
				</PopoverContent>
			</Popover>

			{/* Negocios */}
			<Popover open={negociosOpen} onOpenChange={setNegociosOpen}>
				<PopoverTrigger asChild>
					<div className="flex w-32 h-10 items-center px-3 border border-slate-400 rounded-md -md bg-white">
						<div className="flex flex-col w-full text-[10px] leading-3  justify-center ">
							<span className="text-[10px] leading-3">Área de negócios</span>
							<div className="">{negociosValue ? negociosList.find((negocios) => negocios.value === negociosValue)?.label : '---'}</div>
						</div>
						<CaretDown size={24} />
					</div>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] flex gap-5 flex-col p-3">
					{negociosList.map((negocios) => (
						<div key={negocios.value} className="flex items-center space-x-2">
							<Checkbox
								className="border-gray-400"
								id={negocios.value}
								value={negocios.value}
								checked={negociosValue === negocios.value}
								onChange={(e) => {
									const target = e.target as HTMLInputElement
									const currentValue = target.value
									setNegociosValue(currentValue === negociosValue ? '' : currentValue)
									setNegociosOpen(false)
								}}
							/>
							<label htmlFor={negocios.value} className="text-sm text-gray-700 font-medium leading-none">
								{negocios.label}
							</label>
						</div>
					))}
				</PopoverContent>
			</Popover>

			{/* Motivos */}
			<Popover open={motivosOpen} onOpenChange={setMotivosOpen}>
				<PopoverTrigger asChild>
					<div className="flex w-32 h-10 items-center px-3 border border-slate-400 rounded-md -md bg-white">
						<div className="flex flex-col w-full text-[10px] leading-3  justify-center ">
							<span className="text-[10px] leading-3">Motivos</span>
							<div className="">{motivosValue ? motivosList.find((motivos) => motivos.value === motivosValue)?.label : '---'}</div>
						</div>
						<CaretDown size={24} />
					</div>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-3 flex gap-5 flex-col">
					{motivosList.map((motivos) => (
						<div key={motivos.value} className="flex items-center space-x-2">
							<Checkbox
								className="border-gray-400"
								id={motivos.value}
								value={motivos.value}
								checked={motivosValue === motivos.value}
								onChange={(e) => {
									const target = e.target as HTMLInputElement
									const currentValue = target.value
									setMotivosValue(currentValue === motivosValue ? '' : currentValue)
									setMotivosOpen(false)
								}}
							/>
							<label htmlFor={motivos.value} className="text-sm text-gray-700 font-medium leading-none">
								{motivos.label}
							</label>
						</div>
					))}
				</PopoverContent>
			</Popover>
			<Button className="text-lg bg-[#104b94] h-10 px-3">Buscar</Button>
		</div>
	)
}


