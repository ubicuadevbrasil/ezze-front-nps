import React from 'react'
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts'

interface GaugeChartProps {
	value: number // Valor de 0 a 100
}

const GaugeChart: React.FC<GaugeChartProps> = ({ value }) => {
	// Limitar o valor entre 0 e 100
	const normalizedValue = Math.max(0, Math.min(100, value))

	// Dados do gráfico
	const chartData = [
		{
			name: 'Progress',
			value: normalizedValue,
			fill: '#0c8ce9', // Cor principal
		},
	]

	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<div className="relative w-full h-full">
				{/* Componente responsivo */}
				<ResponsiveContainer width="100%" height="100%">
					<RadialBarChart innerRadius="70%" outerRadius="100%" startAngle={180} endAngle={0} data={chartData}>
						{/* Eixo para determinar o ângulo do gráfico */}
						<PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
						{/* Barras Radiais */}
						<RadialBar background dataKey="value" />
					</RadialBarChart>
				</ResponsiveContainer>
			</div>

			{/* Mostra o valor no centro do gráfico */}
			<div className="absolute text-center -mt-6">
				<p className="text-3xl font-bold text-primary">{normalizedValue}%</p>
			</div>
		</div>
	)
}

export default GaugeChart
