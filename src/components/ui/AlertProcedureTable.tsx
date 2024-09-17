import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const alertData = [
	{
		month: 'Jan',
		closedAlerts: 10,
		procedente: '100,00%',
		improcedente: '0,00%',
	},
	{
		month: 'Fev',
		closedAlerts: 43,
		procedente: '76,74%',
		improcedente: '23,26%',
	},
	{
		month: 'Mar',
		closedAlerts: 41,
		procedente: '85,37%',
		improcedente: '14,63%',
	},
	{
		month: 'Abr',
		closedAlerts: 34,
		procedente: '76,47%',
		improcedente: '23,53%',
	},
	{
		month: 'Mai',
		closedAlerts: 17,
		procedente: '17,65%',
		improcedente: '82,35%',
	},
	{
		month: 'Jun',
		closedAlerts: 44,
		procedente: '13,64%',
		improcedente: '86,36%',
	},
	{
		month: 'Jul',
		closedAlerts: 20,
		procedente: '50,00%',
		improcedente: '50,00%',
	},
	{
		month: 'Ago',
		closedAlerts: 103,
		procedente: '98,06%',
		improcedente: '0,97%',
	},
	{
		month: 'Set',
		closedAlerts: 77,
		procedente: '96,10%',
		improcedente: '0,00%',
	},
	{
		month: 'Out',
		closedAlerts: 3,
		procedente: '100,00%',
		improcedente: '0,00%',
	},
	{
		month: 'Nov',
		closedAlerts: 132,
		procedente: '99,24%',
		improcedente: '0,76%',
	},
	{
		month: 'Dez',
		closedAlerts: 50,
		procedente: '100,00%',
		improcedente: '0,00%',
	},
	{
		month: 'Total',
		closedAlerts: 576,
		procedente: '84,03%',
		improcedente: '15,28%',
	},
]

export function AlertProcedureTable() {
	return (
		<Table>
			<TableHeader className="bg-yellow-300 text-black rounded-2xl">
				<TableRow>
					<TableHead></TableHead>
					{alertData.map((data, index) => (
						<TableHead key={index}>{data.month}</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">Alertas fechados</TableCell>
					{alertData.map((data, index) => (
						<TableCell key={index}>{data.closedAlerts}</TableCell>
					))}
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Procedente</TableCell>
					{alertData.map((data, index) => (
						<TableCell key={index}>{data.procedente}</TableCell>
					))}
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">Improcedente</TableCell>
					{alertData.map((data, index) => (
						<TableCell key={index}>{data.improcedente}</TableCell>
					))}
				</TableRow>
			</TableBody>
		</Table>
	)
}
