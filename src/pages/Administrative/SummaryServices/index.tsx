import NavBar from '@/components/ui/NavBar'
import { ChartBar, SignOut } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table } from '@/components/ui/table'
import CardsSummarySerices from '@/components/ui/CardsSummarySerices'
import { useEffect, useState } from 'react'
import { ADMINISTRATE_API } from '@/services/apiRoutes'
import { Employees } from '@/models/administrate'

interface bodyRequire {
	pageNumber: number
	pageSize: number
}

export default function Index() {
	const [Employees, setEmployees] = useState<Employees[]>()

	async function fetchData(url: string, body: bodyRequire): Promise<any> {
		try {
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body)
			})

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`)
			}

			const data = await response.json()
			return data
		} catch (error) {
			console.error('Error fetching data:', error)
			throw error
		}
	}

	useEffect(() => {
		fetchData(ADMINISTRATE_API.getEmployeesPagination, { pageNumber: 1, pageSize: 13 })
			.then((data: Employees[]) => setEmployees(data))
			.catch((error) => console.error(error))
	}, [])

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
				<CardsSummarySerices />

				<div className="bg-white w-full border rounded-md border-slate-400">
					<div className="bg-[#365da5] w-full rounded-t-sm border-slate-400">
						<h1 className="p-4 text-white ">Atendentes online</h1>
					</div>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">#</TableHead>
								<TableHead>Nome do usuário</TableHead>
								<TableHead>Supervisor</TableHead>
								<TableHead className="text-left">Logado</TableHead>
								<TableHead className="text-left">Em atendimento</TableHead>
								<TableHead className="text-left">Encerramento </TableHead>
								<TableHead className="text-center">Deslogar </TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{Employees?.map((invoice, index) => (
								<TableRow key={index}>
									<TableCell className="text-left">#</TableCell>
									<TableCell className="font-medium">{invoice.user.name}</TableCell>
									<TableCell>{invoice.user.supervisor}</TableCell>
									<TableCell>{invoice.isOnline}</TableCell>
									<TableCell className="text-left">{invoice.user.alerts?.filter((item) => !item.closed).length}</TableCell>
									<TableCell className="text-left">{invoice.user.alerts?.filter((item) => item.closed).length}</TableCell>
									<TableCell>
										<div className="w-full flex justify-center">
											<SignOut color="#D92D1F" className="my-1" size={20} />
										</div>
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
