import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const reasonsData = [
	{
		solutions: 'Esclarecimento/Providencias',
		amount: 'Base',
		percentage: '100,00%',
	},
]

export function SolutionsTable() {
	return (
		<Table>
			<TableHeader className="bg-yellow-300 text-black rounded-2xl">
				<TableRow>
					<TableHead>Solução aceita</TableHead>
					<TableHead>Quantidade</TableHead>
					<TableHead>Porcentagem</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{reasonsData.map((reason, index) => (
					<TableRow key={index}>
						<TableCell className="font-medium">{reason.solutions}</TableCell>
						<TableCell>{reason.amount}</TableCell>
						<TableCell>{reason.percentage}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
