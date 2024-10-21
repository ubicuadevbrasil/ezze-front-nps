import { DealsTable } from "@/models/dashboardResponse"

const data = {
	header: [
		{ type: 'Novo', count: 3, color: 'bg-yellow-400' },
		{ type: 'Vencido', count: 0, color: 'bg-orange-400' },
		{ type: 'Escalado', count: 1, color: 'bg-green-700' },
		{ type: 'Andamento', count: 0, color: 'bg-green-400' },
		{ type: 'Concluído', count: 0, color: 'bg-blue-400' },
		{ type: 'Total', count: 71, color: 'bg-red-900' },
	],
	rows: [
		{ category: 'Promotor', novo: 3, vencido: 0, escalado: 0, andamento: 0, concluido: 0, total: 55 },
		{ category: 'Neutro', novo: 0, vencido: 0, escalado: 0, andamento: 0, concluido: 4, total: 4 },
		{ category: 'Detrator', novo: 0, vencido: 0, escalado: 1, andamento: 0, concluido: 0, total: 12 },
	],
}

const AlertTable = (data: DealsTable) => {
	return (
		<div className="rounded-sm overflow-x-auto">
			<table className="min-w-full border-collapse border">
				{/* Cabeçalho */}
				<thead>
					<tr className="bg-white text-center">
						<th className="border p-2">Tipo de alerta</th>
						{data.header.map((item, idx) => (
							<th key={idx} className="border p-2">
								<div className="flex items-center justify-start ">
									<span className={`w-2 h-9 rounded-full ${item.color} mr-1`}></span>
									<span className="font-bold">{item.count}</span>
								</div>
								<div className="text-xs">{item.type}</div>
							</th>
						))}
					</tr>
				</thead>

				{/* Corpo da tabela */}
				<tbody>
					{data.rows.map((row, idx) => (
						<tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-red-50'}`}>
							<td className="border p-2 text-center font-semibold bg-indigo-50">{row.category}</td>
							<td className="border p-2 text-center">{row.new}</td>
							<td className="border p-2 text-center">{row.overdue}</td>
							<td className="border p-2 text-center">{row.escalated}</td>
							<td className="border p-2 text-center">{row.ongoing}</td>
							<td className="border p-2 text-center">{row.closed}</td>
							<td className="border p-2 text-center font-bold">{row.total}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default AlertTable
