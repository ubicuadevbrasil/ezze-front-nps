import NavBar from '@/components/ui/NavBar'
import { ChartBar, SignOut } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table } from '@/components/ui/table'
import CardsSummarySerices from '@/components/ui/CardsSummarySerices'

export default function Index() {

	const invoices = [
		{
			invoice: '#',
			paymentStatus: 'Paid',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card',
		},
		{
			invoice: '#',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal',
		},
		{
			invoice: '#',
			paymentStatus: 'Unpaid',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer',
		},
		{
			invoice: '#',
			paymentStatus: 'Paid',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card',
		},
		{
			invoice: '#',
			paymentStatus: 'Paid',
			totalAmount: '$550.00',
			paymentMethod: 'PayPal',
		},
		{
			invoice: '#',
			paymentStatus: 'Pending',
			totalAmount: '$200.00',
			paymentMethod: 'Bank Transfer',
		},
		{
			invoice: '#',
			paymentStatus: 'Unpaid',
			totalAmount: '$300.00',
			paymentMethod: 'Credit Card',
		},
	]
	return (
		<div className="flex flex-col min-h-screen bg-[#F1F3FE]">
			<NavBar />
			<nav className="flex text-[#333946] bg-white h-20 items-center justify-between pl-8 pr-3">
				<div className="flex gap-3 font-medium text-lg items-center">
					<ChartBar size={32} />
					<p>Resumo de atendimentos</p>
				</div>
				<Button className="bg-[#365da5] text-lg px-4 py-2">Forçar atualização</Button>
			</nav>

			<main className="flex flex-col items-center gap-10 m-5 py-10 flex-grow h-full">
				<CardsSummarySerices/>

				<div className="bg-white pb-4 w-full border rounded-md border-slate-400">
					<div className="bg-[#365da5] w-full rounded-t-md border-slate-400">
						<h1 className="p-4 text-white ">Atendentes online</h1>
					</div>
					<Table className="rounded-md -b-xl pb-3">
						<TableHeader>
							<TableRow className="bg-white">
								<TableHead className="w-[100px]">#</TableHead>
								<TableHead>Nome do usuário</TableHead>
								<TableHead>Supervisor</TableHead>
								<TableHead className="text-right">Logado</TableHead>
								<TableHead className="text-right">Em atendimento</TableHead>
								<TableHead className="text-right">Encerramento </TableHead>
								<TableHead className="text-right">Deslogar </TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className="bg-white">
							{invoices.map((invoice) => (
								<TableRow key={invoice.invoice}>
									<TableCell className="font-medium">{invoice.invoice}</TableCell>
									<TableCell>{invoice.paymentStatus}</TableCell>
									<TableCell>{invoice.paymentMethod}</TableCell>
									<TableCell className="text-right">{invoice.totalAmount}</TableCell>
									<TableCell className="text-right">{invoice.totalAmount}</TableCell>
									<TableCell className="text-right">{invoice.totalAmount}</TableCell>
									<TableCell className="flex justify-end">
										<SignOut size={32} />
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</main>
			<footer className="flex w-full justify-center py-2 bg-[#D9DDE5] mt-auto text-[10px]">{new Date().getFullYear()} - Powered by Ubicua ©</footer>
		</div>
	)
}
