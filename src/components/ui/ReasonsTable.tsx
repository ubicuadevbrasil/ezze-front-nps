import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const reasonsData = [
	{
		mainReason1: 'Chegada do prestador',
		mainReason2: 'Atraso na chegada do prestador',
		mainReason3: 'Atraso na primeira intervenção',
		mainReason4: 'Falha na rede de prestadores',
		mainReason5: 'Falha do profissional',
		quantity: 8,
		percentage: '100,00%',
	},
	{
		mainReason1: 'Chegada do prestador',
		mainReason2: 'Atraso na chegada do prestador',
		mainReason3: 'Atraso na primeira intervenção',
		mainReason4: 'Falha na rede de prestadores',
		mainReason5: 'Falha do profissional',
		quantity: 8,
		percentage: '100,00%',
	},
]

export function ReasonsTable() {
	return (
		<Table>
			<TableHeader className="bg-yellow-300 text-black rounded-2xl">
				<TableRow>
					<TableHead>Motivo principal I</TableHead>
					<TableHead>Motivo principal II</TableHead>
					<TableHead>Motivo principal III</TableHead>
					<TableHead>Motivo principal IV</TableHead>
					<TableHead>Motivo principal V</TableHead>
					<TableHead>Quantidade</TableHead>
					<TableHead>%</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{reasonsData.map((reason, index) => (
					<TableRow key={index}>
						<TableCell className="font-medium">{reason.mainReason1}</TableCell>
						<TableCell>{reason.mainReason2}</TableCell>
						<TableCell>{reason.mainReason3}</TableCell>
						<TableCell>{reason.mainReason4}</TableCell>
						<TableCell>{reason.mainReason5}</TableCell>
						<TableCell>{reason.quantity}</TableCell>
						<TableCell>{reason.percentage}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
