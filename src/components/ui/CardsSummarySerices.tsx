import { Card, CardDescription } from '@/components/ui/card'
import { CardResumeService } from '@/models/administrate'
import apiClient from '@/services/apiClient'
import { ADMINISTRATE_API } from '@/services/apiRoutes'
import { CheckCircle, Checks, Clock, PaperPlaneRight, UsersThree } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

export default () => {
	const [Data, setData] = useState<CardResumeService>()

	useEffect(() => {
		apiClient.get<CardResumeService>(ADMINISTRATE_API.getCardsResumeSummaryServices)
		.then((res) => setData(res.data))
	}, [])

	return (
		<div className="flex flex-wrap gap-10 justify-center lg:h-full">
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
					<h1 className="font-bold text-4xl">{Data?.inService}</h1>
				</div>

				{/* Ícone SVG posicionado no canto superior direito */}
				<PaperPlaneRight className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-3/6 h-3/6 text-[#71c279]" />
			</Card>

			<Card className="relative shadow-lg flex items-center overflow-hidden bg-[#f1f3fe] border-2 border-[#b8c5f8 ] h-32 w-64">
				<div className="px-2 pb-1 pt-1 flex flex-col h-full w-full gap-5">
					<CardDescription>Atendimentos (hoje)</CardDescription>
					<h1 className="font-bold text-4xl">{Data?.servicesToday}</h1>
				</div>

				{/* Ícone SVG posicionado no canto superior direito */}
				<Checks className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-20 h-20 text-[#9baef0]" />
			</Card>

			<Card className="relative shadow-lg flex items-center overflow-hidden bg-[#f1f3fe] border-2 border-[#b8c5f8] h-32 w-64">
				<div className="px-2 pb-1 pt-1 flex flex-col h-full w-full gap-5">
					<CardDescription>Encerrados (hoje)</CardDescription>
					<h1 className="font-bold text-4xl">{Data?.closedToday}</h1>
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
	)
}
