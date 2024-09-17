import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const performanceData = [
	{
		name: 'Courtney Henry',
		alertCount: 994,
		closedAlertPercentage: '100%',
		closedIn48HoursPercentage: '80%',
		averageClosingTime: '00:00:53',
		delayedPercentage: '0,00%',
		escalatedPercentage: '0,00%',
	},
	{
		name: 'Ralph Edwards',
		alertCount: 492,
		closedAlertPercentage: '80%',
		closedIn48HoursPercentage: '75%',
		averageClosingTime: '00:00:53',
		delayedPercentage: '0,00%',
		escalatedPercentage: '0,00%',
	},
	{
		name: 'Marvin McKinney',
		alertCount: 536,
		closedAlertPercentage: '70%',
		closedIn48HoursPercentage: '80%',
		averageClosingTime: '00:01:53',
		delayedPercentage: '0,00%',
		escalatedPercentage: '0,00%',
	},
	{
		name: 'Jane Cooper',
		alertCount: 703,
		closedAlertPercentage: '70%',
		closedIn48HoursPercentage: '60%',
		averageClosingTime: '00:15:53',
		delayedPercentage: '0,00%',
		escalatedPercentage: '0,00%',
	},
	{
		name: 'Guy Hawkins',
		alertCount: 423,
		closedAlertPercentage: '100%',
		closedIn48HoursPercentage: '100%',
		averageClosingTime: '01:15:53',
		delayedPercentage: '0,00%',
		escalatedPercentage: '0,00%',
	},
]

export function PerformanceTable() {
	return (
		<Table>
			<TableHeader className='bg-yellow-300 text-black rounded-2xl'>
				<TableRow>
					<TableHead>Nome</TableHead>
					<TableHead>Número de alertas</TableHead>
					<TableHead>Percentual de Alertas Fechados</TableHead>
					<TableHead>Percentual de Alertas fechados em 48 horas</TableHead>
					<TableHead>Tempo médio de fechamento de alertas (horas úteis)</TableHead>
					<TableHead>Percentual de alertas atrasados</TableHead>
					<TableHead>Percentual de alertas escalonados ao menos uma vez</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{performanceData.map((data) => (
					<TableRow key={data.name}>
						<TableCell className="font-medium">{data.name}</TableCell>
						<TableCell>{data.alertCount}</TableCell>
						<TableCell>{data.closedAlertPercentage}</TableCell>
						<TableCell>{data.closedIn48HoursPercentage}</TableCell>
						<TableCell>{data.averageClosingTime}</TableCell>
						<TableCell>{data.delayedPercentage}</TableCell>
						<TableCell>{data.escalatedPercentage}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
