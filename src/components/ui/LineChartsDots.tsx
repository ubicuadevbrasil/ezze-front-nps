'use client'

import { TrendingUp } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

interface LineChartProps {
	data: { month: string; alertas: number }[]
	config: ChartConfig
}

export const description = 'A line chart with dots'

export function LineChartComponent({ data, config }: LineChartProps) {
	return (
		<>
			<CardContent className="w-full h-full p-10">
				<ChartContainer config={config} className="w-full h-full">
					<LineChart
						data={data}
						margin={{
							left: 12,
							right: 12,
							top: 16,
							bottom: 0,
						}}
						className="w-full h-full">
						<CartesianGrid vertical={false} />
						<XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
						<YAxis hide />
						<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
						<Line
							dataKey="alertas"
							type="linear"
							stroke={config.alertas.color}
							strokeWidth={2}
							dot={{
								fill: config.alertas.color,
							}}
							activeDot={{
								r: 6,
							}}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</>
	)
}
