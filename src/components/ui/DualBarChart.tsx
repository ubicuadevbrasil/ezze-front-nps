import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend, LabelList } from 'recharts'

interface DataPoint {
	month: string
	sim: number
	nao: number
}

interface BarChartProps {
	data: DataPoint[]
}

const CustomBarChart: React.FC<BarChartProps> = ({ data }) => {
	// Calcula as porcentagens de sim e nao
	const formattedData = data.map(({ month, sim, nao }) => {
		const total = sim + nao
		const simPercentage = total === 0 ? 0 : (sim / total) * 100
		const naoPercentage = total === 0 ? 0 : (nao / total) * 100
		return {
			month,
			sim: simPercentage,
			nao: naoPercentage,
		}
	})

	return (
		<div className="w-full h-96">
			{' '}
			{/* A altura aqui pode ser ajustada conforme necessário */}
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={formattedData} // Usando os dados formatados com porcentagens
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="month" /> {/* Certifique-se de usar a chave correta aqui */}
					<YAxis tickFormatter={(value) => `${value}%`} /> {/* Exibe o valor como porcentagem */}
					<Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
					<Legend />
					<Bar dataKey="sim" stackId="a" fill="#199c19">
						<LabelList
							dataKey="sim"
							position="insideTop"
							formatter={(value: number) => `${value.toFixed(2)}%`}
							style={{ fill: 'white' }} // Alterando a cor do texto para branco
						/>
					</Bar>
					<Bar dataKey="nao" stackId="a" fill="#cc2929">
						<LabelList
							dataKey="nao"
							position="insideTop"
							formatter={(value: number) => `${value.toFixed(2)}%`}
							style={{ fill: 'white' }} // Alterando a cor do texto para branco
						/>
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default CustomBarChart
