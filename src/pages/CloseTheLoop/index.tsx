import React, { useEffect, useState } from 'react'
import { BaseTemplate } from '../layouts/BaseTemplate'
import SearchBar from './SearchBar'
import { DataTable } from './dataTable'
import { columns, ICloseTheLoop } from './columns'

async function getData(): Promise<ICloseTheLoop[]> {
	const closeTheLoopData: ICloseTheLoop[] = [
		{
			numeroAssistencia: 123456,
			nome: 'João Silva',
			ciaCliente: 'Empresa A',
			email: 'joao.silva@example.com',
			comentario: 'Serviço rápido e eficiente.',
			atribuicao: '----',
			tentativaContato: 9,
			status: 'Concluido',
			alerta: 'Promotor',
			contato: { telefone: '11987654321', canal: 'Telefone' },
		},
		{
			numeroAssistencia: 234567,
			nome: 'Maria Souza',
			ciaCliente: 'Empresa B',
			email: 'maria.souza@example.com',
			comentario: 'Problema resolvido, mas demorou.',
			atribuicao: '----',
			tentativaContato: 9,
			status: 'Andamento',
			alerta: 'Neutro',
			contato: { telefone: '11987654322', canal: 'Email' },
		},
		{
			numeroAssistencia: 345678,
			nome: 'Carlos Pereira',
			ciaCliente: 'Empresa C',
			email: 'carlos.pereira@example.com',
			comentario: 'Muito satisfeito com o atendimento.',
			atribuicao: '----',
			tentativaContato: 9,
			status: 'Concluido',
			alerta: 'Promotor',
			contato: { telefone: '11987654323', canal: 'WhatsApp' },
		},
		{
			numeroAssistencia: 456789,
			nome: 'Ana Costa',
			ciaCliente: 'Empresa D',
			email: 'ana.costa@example.com',
			comentario: 'Ainda aguardando retorno.',
			atribuicao: '----',
			tentativaContato: 9,
			status: 'Atrasado',
			alerta: 'Detrator',
			contato: { telefone: '11987654324', canal: 'Telefone' },
		},
		{
			numeroAssistencia: 567890,
			nome: 'Luiz Oliveira',
			ciaCliente: 'Empresa E',
			email: 'luiz.oliveira@example.com',
			comentario: 'Problema resolvido rapidamente.',
			atribuicao: '----',
			tentativaContato: 9,
			status: 'Concluido',
			alerta: 'Promotor',
			contato: { telefone: '11987654325', canal: 'Email' },
		},
		{
			numeroAssistencia: 678901,
			nome: 'Fernanda Almeida',
			ciaCliente: 'Empresa F',
			email: 'fernanda.almeida@example.com',
			comentario: 'Atendimento satisfatório, mas poderia melhorar.',
			atribuicao: '----',
			tentativaContato: 9,
			status: 'Andamento',
			alerta: 'Neutro',
			contato: { telefone: '11987654326', canal: 'WhatsApp' },
		},
		{
			numeroAssistencia: 789012,
			nome: 'Ricardo Lima',
			ciaCliente: 'Empresa G',
			email: 'ricardo.lima@example.com',
			comentario: 'Muito tempo para resolver.',
			atribuicao: '----',
			tentativaContato: 9,
			status: 'Escalonado',
			alerta: 'Detrator',
			contato: { telefone: '11987654327', canal: 'Telefone' },
		},
	]

	return closeTheLoopData
}

const Index: React.FC = () => {
	const [data, setData] = useState<ICloseTheLoop[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getData()
				setData(result)
			} catch (error) {
				console.error('Error fetching data:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}
	return (
		<BaseTemplate>
			<SearchBar />
			<div className="px-5 pt-2 pb-10 bg-white">
				<DataTable columns={columns} data={data} />
			</div>
		</BaseTemplate>
	)
}

export default Index
