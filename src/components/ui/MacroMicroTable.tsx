import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const areaData = [
	{
		macroArea: 'Rede de Prestador',
		microArea: 'Base',
		quantity: 16,
		percentage: '80,00%',
	},
	{
		macroArea: 'Rede de Prestador',
		microArea: 'Rede de Prestadores',
		quantity: 4,
		percentage: '20,00%',
	},
]

export function MacroMicroTable() {
	return (
		<Table>
			<TableHeader className="bg-yellow-300 text-black rounded-md -2xl">
				<TableRow>
					<TableHead>Área Macro</TableHead>
					<TableHead>Área Micro</TableHead>
					<TableHead>Quantidade</TableHead>
					<TableHead>Porcentagem</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{areaData.map((area, index) => (
					<TableRow key={index}>
						<TableCell className="font-medium">{area.macroArea}</TableCell>
						<TableCell>{area.microArea}</TableCell>
						<TableCell>{area.quantity}</TableCell>
						<TableCell>{area.percentage}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
