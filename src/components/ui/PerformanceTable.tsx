import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { QualityManagerPerformance } from '@/models/dashboardResponse'

interface PerformanceTableProps {
	data: QualityManagerPerformance[]
}

export function PerformanceTable({data}:PerformanceTableProps) {
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
				{data.map((items) => (
					<TableRow key={items.name}>
						<TableCell className="font-medium">{items.name}</TableCell>
						<TableCell>{items.alertCount}</TableCell>
						<TableCell>{items.closedPercent}</TableCell>
						<TableCell>{items.closedIn48hPercent}</TableCell>
						<TableCell>{items.avgClosingTime}</TableCell>
						<TableCell>{items.delayedPercent}</TableCell>
						<TableCell>{items.escalatedPercent}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
