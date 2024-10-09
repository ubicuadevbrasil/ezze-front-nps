import { useEffect, useState } from 'react'
import { IPedingSearch } from '../PendingSearch/columns'
import { useLocation } from 'react-router-dom'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import NavBar from '@/components/ui/NavBar'
import { Button } from '@/components/ui/button'
import ConfirmationModal from '@/components/ui/ConfirmationModal'
import { BaseTemplate } from '../layouts/BaseTemplate'


export default function index() {
	const location = useLocation()
	const [isModalVisible, setModalVisible] = useState(false)

	const handleConfirm = () => {
		console.log('Confirmed!')
		setModalVisible(false)
	}

	const handleCancel = () => {
		console.log('Cancelled!')
		setModalVisible(false)
	}
	const clientData: IPedingSearch = location.state

	const invoices = [
		{
			invoice: 'INV001',
			paymentStatus: 'Paid',
			totalAmount: '$250.00',
			paymentMethod: 'Credit Card',
		},
		{
			invoice: 'INV002',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'PayPal',
		},
		{
			invoice: 'INV003',
			paymentStatus: 'Unpaid',
			totalAmount: '$350.00',
			paymentMethod: 'Bank Transfer',
		},
		{
			invoice: 'INV004',
			paymentStatus: 'Paid',
			totalAmount: '$450.00',
			paymentMethod: 'Credit Card',
		},
		{
			invoice: 'INV005',
			paymentStatus: 'Paid',
			totalAmount: '$550.00',
			paymentMethod: 'PayPal',
		},
		{
			invoice: 'INV006',
			paymentStatus: 'Pending',
			totalAmount: '$200.00',
			paymentMethod: 'Bank Transfer',
		},
		{
			invoice: 'INV007',
			paymentStatus: 'Unpaid',
			totalAmount: '$300.00',
			paymentMethod: 'Credit Card',
		},
	]

	return (
		<BaseTemplate>
			<ConfirmationModal isVisible={isModalVisible} onConfirm={handleConfirm} onCancel={handleCancel} message="Você deseja tabular uma tentativa de contato?" />
			{/* <NavBar /> */}

			<div className="w-full pt-2 pb-4 px-3 gap-5 flex flex-row  items-center justify-between">
					<div className="flex flex-row gap-5 items-center">
						<Button className="text-lg bg-[#104b94] h-10 px-3">Voltar</Button>
						<h1 className="text-base font-medium">Alfredo</h1>
					</div>
					<div className="gap-2 flex">
						<Button className="rounded-sm px-3 py-2.5 border border-[#104b94] text-[#104b94]" variant={'outline'}>
							Responder Pesquisa
						</Button>
						<Button className="rounded-sm px-3 py-2.5 border border-[#104b94] text-[#104b94]" variant={'outline'}>
							Tabular tentativa de contato
						</Button>
						<Button className="rounded-sm px-3 py-2.5 border border-[#104b94] text-[#104b94]" variant={'outline'}>
							Voltar
						</Button>
					</div>
				</div>

			<div className="grid grid-cols-3 grid-rows-2 gap-2 mx-3">
				<div className='row-span-2 py-2 px-4 bg-white flex flex-col gap-1 rounded-sm'>
					<h1 className="font-medium text-sm">Informações sobre o cliente</h1>
					<table>
						<tbody>
							<tr className='border-b border-[#B6AFA4] text-xs'>
								<td className='py-3 px-2'>Nome do Cliente</td>
								<td>DEISEMATOS DO ESPIRITO SANTO</td>
							</tr>
							<tr className='border-b border-[#B6AFA4] text-xs'>
								<td className='py-3 px-2'>Email do Cliente</td>
								<td>-</td>
							</tr>
							<tr className='border-b border-[#B6AFA4] text-xs'>
								<td className='py-3 px-2'>Gênero</td>
								<td>-</td>
							</tr>
							<tr className='border-b border-[#B6AFA4] text-xs'>
								<td className='py-3 px-2'>Telefone do Cliente</td>
								<td>11947571208</td>
							</tr>
							<tr className='border-b border-[#B6AFA4] text-xs'>
								<td className='py-3 px-2'>Data de Nascimento</td>
								<td>-</td>
							</tr>
							<tr className='border-b border-[#B6AFA4] text-xs'>
								<td className='py-3 px-2'>Estado do Cliente</td>
								<td>São Paulo</td>
							</tr>
							<tr className='border-b border-[#B6AFA4] text-xs'>
								<td className='py-3 px-2'>Cidade do Cliente</td>
								<td>São Paulo</td>
							</tr>
							<tr className='text-xs'>
								<td className='py-3 px-2'>Endereço</td>
								<td>-</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='col-span-2 row-span-2 py-2 px-4 bg-white flex flex-col gap-2 rounded-sm'>
					<h1 className="font-medium text-sm">Informações sobre a transação</h1>
					<div className=" flex flex-row">
						<table className='w-full'>
							<tbody>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Número da assistência</td>
									<td>124536598</td>
									<td>Código de serviço</td>
									<td>4000</td>
								</tr>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Datade Abertura do Arquivo</td>
									<td>21/07/2024</td>
									<td>Endereço dos serviços</td>
									<td>GUARULHOS, SÃO PAULO, SUDESTE</td>
								</tr>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Tipo de Assistência</td>
									<td>EMERGENCIA</td>
									<td>Data do serviço</td>
									<td>21/07/2024</td>
								</tr>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Garantia</td>
									<td>ELETRICISTA</td>
									<td>Tipo de prestador</td>
									<td>CONSTRUÇÃO MANUTENÇÃO CIVIL</td>
								</tr>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Risco</td>
									<td>CONSTRUÇÃO E INSTALAÇÕES</td>
									<td>Nome do prestador</td>
									<td>EMBAJADOR MAWDY - HOME SERVICE</td>
								</tr>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Número do contrato</td>
									<td>40000044089</td>
									<td>Estado do prestador</td>
									<td>SÃO PAULO</td>
								</tr>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Centro Trasmitador</td>
									<td>TAMBORE</td>
									<td>Cidade do prestador</td>
									<td>GUARULHOS</td>
								</tr>
								<tr className='text-xs'>
									<td className='py-3 px-2'>Tipo de Serviço</td>
									<td>ELETRICISTA</td>
									<td>Canal de resposta</td>
									<td>SMS</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</BaseTemplate>
	)
}
