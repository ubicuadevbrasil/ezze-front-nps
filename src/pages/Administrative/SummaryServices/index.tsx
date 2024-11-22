import NavBar from '@/components/ui/NavBar'
import { Card, CardDescription } from '@/components/ui/card'
import { ChartBar, CheckCircle, Checks, Clock, PaperPlaneRight, SignOut, UsersThree } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table } from '@/components/ui/table'

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
		<div className="flex flex-col min-h-screen bg-white">
			<NavBar />
			<nav className="flex text-[#333946] bg-white h-20 items-center justify-between pl-8 pr-3">
				<div className="flex gap-3 font-medium text-lg items-center">
					<ChartBar size={32} />
					<p>Resumo de atendimentos</p>
				</div>
				<Button className="bg-[#203863] text-lg px-4 py-2">Forçar atualização</Button>
			</nav>

			<main className="flex flex-col items-center gap-10 m-5 py-10 flex-grow h-full">
				<div className="flex gap-16 justify-between h-full">
					<Card className="relative shadow-lg flex items-center overflow-hidden bg-[#ffefe5] border-2 border-[#ffd0b2] h-32 w-64">
						<div className="px-2 pb-1 pt-1 flex flex-col h-full w-full justify-between">
							<CardDescription>Aguardando na fila</CardDescription>
							<h1 className="font-bold text-4xl">0000</h1>

							<div className="flex gap-2 items-center">
								<Clock className="text-[#333946]" />
								<p className="flex gap-1 font-bold">
									00
									<p className="font-normal">h</p>
								</p>
								<p className="flex gap-1 font-bold">
									00
									<p className="font-normal">min</p>
								</p>
								<p className="flex gap-1 font-bold">
									00
									<p className="font-normal">seg</p>
								</p>
							</div>
						</div>

						{/* Ícone SVG posicionado no canto superior direito */}
						<UsersThree className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-20 h-20 text-[#ff955a]" />
					</Card>

					<Card className="relative shadow-lg flex items-center overflow-hidden bg-[#eaf7ea] border-2 border-[#c1e7c2] h-32 w-64">
						<div className="px-2 pb-1 pt-1 flex flex-col h-full w-full gap-5 ">
							<CardDescription>Em Atendimento</CardDescription>
							<h1 className="font-bold text-4xl">0000</h1>
						</div>

						{/* Ícone SVG posicionado no canto superior direito */}
						<PaperPlaneRight className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-3/6 h-3/6 text-[#71c279]" />
					</Card>

					<Card className="relative shadow-lg flex items-center overflow-hidden bg-[#f1f3fe] border-2 border-[#b8c5f8 ] h-32 w-64">
						<div className="px-2 pb-1 pt-1 flex flex-col h-full w-full gap-5">
							<CardDescription>Atendimentos (hoje)</CardDescription>
							<h1 className="font-bold text-4xl">0000</h1>
						</div>

						{/* Ícone SVG posicionado no canto superior direito */}
						<Checks className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-20 h-20 text-[#9baef0]" />
					</Card>

					<Card className="relative shadow-lg flex items-center overflow-hidden bg-[#f1f3fe] border-2 border-[#b8c5f8] h-32 w-64">
						<div className="px-2 pb-1 pt-1 flex flex-col h-full w-full gap-5">
							<CardDescription>Encerrados (hoje)</CardDescription>
							<h1 className="font-bold text-4xl">0000</h1>
						</div>

						{/* Ícone SVG posicionado no canto superior direito */}
						<CheckCircle className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-20 h-20 text-[#9baef0]" />
					</Card>

					<Card className="relative shadow-lg flex items-center overflow-hidden bg-[#f2f4f6] border-2 border-[#a8b1c2] h-26 w-64">
						<div className="px-2 pb-1 pt-1 flex flex-col h-full w-full gap-5">
							<CardDescription>Tempo médio de Atendimento</CardDescription>
							<h1 className="font-bold text-4xl">00:00</h1>
						</div>

						{/* Ícone SVG posicionado no canto superior direito */}
						<Clock className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-20 h-20 text-[#d9dde5]" />
					</Card>

					<Card className="relative shadow-lg flex items-center overflow-hidden bg-[#ffff] border-2 border-[#b6afaf] h-32 w-64">
						<div className="px-2 pb-1 pt-1 text-sm flex flex-col h-full w-full text-[#333946] justify-between font-medium">
							<div className="leading-tight">
								<p>Balanceamento</p>
								<p>(55479999457051)</p>
							</div>
							<div className="leading-tight">
								<div className="flex justify-between">
									<p>Enviadas:</p>
									<p className="font-bold">0000</p>
								</div>
								<div className="flex justify-between">
									<p>Recebidas:</p>
									<p className="font-bold">0000</p>
								</div>
								<div className="flex justify-between">
									<p>Atendimentos:</p>
									<p className="font-bold">0016</p>
								</div>
							</div>
						</div>
					</Card>
				</div>

				<div className="bg-white pb-4 w-full border rounded-3xl border-slate-400">
					<div className="bg-[#203863] w-full rounded-t-2xl border-slate-400">
						<h1 className="p-4 text-white ">Atendentes online</h1>
					</div>
					<Table className="rounded-b-xl pb-3">
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
