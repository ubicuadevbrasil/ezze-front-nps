import RadialChart from '@/components/ui/RadialChart'
import { LineChartComponent } from '@/components/ui/LineChartsDots'
// import DualBarChart from '@/components/ui/DualBarChart'
//import AlertsTable from "@/components/ui/AlertsTable"
//import { PerformanceTable } from '@/components/ui/PerformanceTable'
import { ReasonsTable } from '@/components/ui/ReasonsTable'
import { SolutionsTable } from '@/components/ui/Solutions'
import { MacroMicroTable } from '@/components/ui/MacroMicroTable'
import { AlertProcedureTable } from '@/components/ui/AlertProcedureTable'
import { BaseTemplate } from '../layouts/BaseTemplate'
import { FilterSearchBar } from '@/components/ui/FilterBarDashboard'
/* import { DashboardResponse } from '@/models/dashboardResponse'
import { useQuery } from '@tanstack/react-query'
import { Spinner } from '@/components/ui/Spinner' */
import { PerformanceTable } from '@/components/ui/PerformanceTable'
import AlertsTable from '@/components/ui/AlertsTable'
import { DashboardResponse } from '@/models/dashboardResponse'

export default function Index() {
	const dataTeste: DashboardResponse = {
		closedDeals48hPercent: 50,
		closedDeals48hOverTime: [
			{ month: 'January', alerts: 186 },
			{ month: 'February', alerts: 305 },
			{ month: 'March', alerts: 237 },
			{ month: 'April', alerts: 73 },
			{ month: 'May', alerts: 209 },
			{ month: 'June', alerts: 214 },
		],
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
		dealsTable: {
			header: [
 		{ type: 'Novo', count: 3, color: 'bg-yellow-400' },
 		{ type: 'Vencido', count: 0, color: 'bg-orange-400' },
 		{ type: 'Escalado', count: 1, color: 'bg-green-700' },
 		{ type: 'Andamento', count: 0, color: 'bg-green-400' },
 		{ type: 'Concluído', count: 0, color: 'bg-blue-400' },
 		{ type: 'Total', count: 71, color: 'bg-red-900' },
 	],
 	rows: [
		{ category: 'Promotor', new: 3, overdue: 0, escalated: 0, ongoing: 0, closed: 0, total: 55 },
 		{ category: 'Neutro', new: 0, overdue: 0, escalated: 0, ongoing: 0, closed: 4, total: 4 },
 		{ category: 'Detrator', new: 0, overdue: 0, escalated: 1, ongoing: 0, closed: 0, total: 12 },
 	]},
		qualityManagerPerformance: [
			{
				alertCount: 10,
				avgClosingTime: '10',
				closedIn48hPercent: '10',
				closedPercent: '10',
				delayedPercent: '10',
				escalatedPercent: '10',
				name: 'teste',
			},
		],
	}
	//const { data, isLoading } = useQuery<DashboardResponse>({queryKey:['searchDashboard']})

	// if(error){
	// 	return (
	// 		<BaseTemplate>
	// 		<FilterSearchBar />
	// 		<main className="flex flex-col items-center gap-4 mt-2 mb-6 w-full py-4 px-10">
	// 			Erro: {error.message}
	// 		</main>
	// 		</BaseTemplate>
	// 	)
	// }

	/* if (isLoading){
		return (
			<BaseTemplate>
				<FilterSearchBar />
				<main className="flex flex-col items-center gap-4 mt-2 mb-6 w-full py-4 px-10">
					<Spinner/>
				</main>
			</BaseTemplate>
		)
	} */

	return (
		<BaseTemplate>
			<FilterSearchBar />
			<main className="flex flex-col items-center gap-4 mb-6 w-full py-4 px-10 bg-[#F1F3FE]">
				<div className="flex flex-row gap-4 w-full">
					<div className="w-full md:w-1/2 bg-white flex flex-col rounded-md -[8px] p-4">
						<p className="text-sm text-[#333946]">% de alertas fechados em 48 horas:</p>
						<RadialChart value={dataTeste?.closedDeals48hPercent as number} />
					</div>
					<div className="w-full md:w-1/2 bg-white flex flex-col rounded-md -[8px] p-4">
						<p className="text-sm text-[#333946]">% de alertas fechados em 48 horas ao longo do tempo:</p>
						<LineChartComponent
							data={dataTeste?.closedDeals48hOverTime as []}
							config={{
								alertas: {
									label: 'Negocios',
									color: '#0c8ce9',
								},
							}}
						/>
					</div>
				</div>
				<div className="w-full flex flex-col gap-5 bg-white rounded-md -[8px] p-4">
					<p className="text-sm text-[#333946]">Tabela de alertas:</p>
					<AlertsTable header={dataTeste?.dealsTable?.header as []} rows={dataTeste?.dealsTable?.rows as []} />
				</div>
				<div className="w-full flex flex-col gap-5 bg-white rounded-md -[8px] p-4">
					<p className="text-sm text-[#333946]">Performance por gerente de qualidade:</p>
					<PerformanceTable data={dataTeste?.qualityManagerPerformance as []} />
				</div>
				<div className="w-full flex flex-col gap-5 bg-white rounded-md -[8px] p-4">
					<p>Acompanhamento dos motivos:</p>
					<ReasonsTable />
				</div>
				<div className="flex flex-row justify-center gap-5 w-full">
					<div className="w-full md:w-1/2 bg-white flex flex-col justify-start rounded-md -[8px] p-4">
						<p className="text-sm text-[#333946]">Indicador por área macro e micro:</p>
						<MacroMicroTable />
					</div>
					<div className="w-full md:w-1/2 bg-white flex flex-col justify-start rounded-md -[8px] p-4">
						<p className="text-sm text-[#333946]">Indicador por solução oferecida:</p>
						<SolutionsTable />
					</div>
				</div>
				<div className="w-full flex flex-col gap-5 bg-white rounded-md -xl p-4">
					<p className="text-sm text-[#333946]">Procedência de alertas:</p>
					<AlertProcedureTable />
				</div>
				<div className="w-full flex flex-col gap-5 bg-white rounded-md -xl p-4">
					<p className="text-sm text-[#333946]">Percentual de Clientes satisfeitos após o contato:</p>
					{/* <DualBarChart data={dataTeste?.satisfactionAfterContact as DataPoint[]} /> */}
				</div>
			</main>
		</BaseTemplate>
	)
}
