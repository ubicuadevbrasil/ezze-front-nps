import React, { useState } from 'react'
import NavBar from '@/components/ui/NavBar'
import { DatePickerWithRange } from '@/components/ui/DatePickerWithRange'
import { Button } from '@/components/ui/button'
import RadialChart from '@/components/ui/RadialChart'
import { LineChartComponent } from '@/components/ui/LineChartsDots'
import DualBarChart from '@/components/ui/DualBarChart'
import AlertsTable from "@/components/ui/AlertsTable"
import { PerformanceTable } from '@/components/ui/PerformanceTable'
import { ReasonsTable } from '@/components/ui/ReasonsTable'
import { SolutionsTable } from '@/components/ui/Solutions'
import { MacroMicroTable } from '@/components/ui/MacroMicroTable'
import { AlertProcedureTable } from '@/components/ui/AlertProcedureTable'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChevronsUpDown } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { BaseTemplate } from '../layouts/BaseTemplate'
import { CaretDown } from '@phosphor-icons/react'

export default function Index() {
	const data = {
		lineChart: {
			data: [
				{ month: 'January', alertas: 186 },
				{ month: 'February', alertas: 305 },
				{ month: 'March', alertas: 237 },
				{ month: 'April', alertas: 73 },
				{ month: 'May', alertas: 209 },
				{ month: 'June', alertas: 214 },
			],
			config: {
				alertas: {
					label: 'Negocios',
					color: '#0c8ce9',
				},
			},
		},
		dualBarChart: {
			data: [
				{ month: 'January', sim: 120, nao: 66 },
				{ month: 'February', sim: 180, nao: 125 },
				{ month: 'March', sim: 140, nao: 97 },
				{ month: 'April', sim: 40, nao: 33 },
				{ month: 'May', sim: 160, nao: 49 },
				{ month: 'June', sim: 170, nao: 44 },
			],
			config: {
				sim: {
					label: 'Sim',
					color: '#34d399', // Verde
				},
				nao: {
					label: 'Não',
					color: '#f87171', // Vermelho
				},
			},
		},
	}

	return (
		<BaseTemplate>
			<FilterSearchBar />
			<main className="flex flex-col items-center gap-4 mt-2 mb-6 w-full p-4">
				<div className="flex flex-row gap-4 max-w-7xl w-full">
					<div className="w-full md:w-1/2 bg-white flex flex-col rounded-[8px] p-4">
						<p>% de negocioss fechados em 48 horas:</p>
						<RadialChart value={10} />
					</div>
					<div className="w-full md:w-1/2 bg-white flex flex-col rounded-[8px] p-4">
						<p>% de negocioss fechados em 48 horas ao longo do tempo:</p>
						<LineChartComponent data={data.lineChart.data} config={data.lineChart.config} />
					</div>
				</div>
				<div className="w-full flex flex-col gap-5 max-w-7xl bg-white rounded-[8px] p-4">
					<p>Tabela de negocioss:</p>
					<AlertsTable />
				</div>
				<div className="w-full flex flex-col gap-5 max-w-7xl bg-white rounded-[8px] p-4">
					<p>Performance por gerente de qualidade:</p>
					<PerformanceTable />
				</div>
				<div className="w-full flex flex-col gap-5 max-w-7xl bg-white rounded-[8px] p-4">
					<p>Acompanhamento dos motivos:</p>
					<ReasonsTable />
				</div>
				<div className="flex flex-row justify-center gap-5 max-w-7xl w-full">
					<div className="w-full md:w-1/2 bg-white flex flex-col justify-start rounded-[8px] p-4">
						<p>Indicador por área macro e micro:</p>
						<MacroMicroTable />
					</div>
					<div className="w-full md:w-1/2 bg-white flex flex-col justify-start rounded-[8px] p-4">
						<p>Indicador por solução oferecida:</p>
						<SolutionsTable />
					</div>
				</div>
				<div className="w-full flex flex-col gap-5 max-w-7xl bg-white rounded-xl p-4">
					<p>Procedência de negócios:</p>
					<AlertProcedureTable />
				</div>
				<div className="w-full flex flex-col gap-5 max-w-7xl bg-white rounded-xl p-4">
					<p>Percentual de Clientes satisfeitos após o contato:</p>
					<DualBarChart data={data.dualBarChart.data} />
				</div>
			</main>
		</BaseTemplate>
	)
}

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

const FilterSearchBar: React.FC = () => {
	const [ciaOpen, setCiaOpen] = useState(false)
	const [ciaValue, setCiaValue] = useState('')
	const [negociosOpen, setNegociosOpen] = useState(false)
	const [negociosValue, setNegociosValue] = useState('')
	const [motivosOpen, setMotivosOpen] = useState(false)
	const [motivosValue, setMotivosValue] = useState('')

	return (
		<div className="px-5 py-3 w-full gap-2 flex flex-row items-center justify-end">
				<DatePickerWithRange className="border-slate-400" />
				{/* Cia */}
				<Popover open={ciaOpen} onOpenChange={setCiaOpen}>
					<PopoverTrigger asChild>
						<div className='flex w-32 h-10 items-center px-3 border border-slate-400 rounded-md bg-white'>
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
										const currentValue = e.target.value
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
						<div className='flex w-32 h-10 items-center px-3 border border-slate-400 rounded-md bg-white'>
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
										const currentValue = e.target.value
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
						<div className='flex w-32 h-10 items-center px-3 border border-slate-400 rounded-md bg-white'>
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
										const currentValue = e.target.value
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


