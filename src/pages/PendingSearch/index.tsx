import React, { useEffect, useState } from 'react'
import { BaseTemplate } from '../layouts/BaseTemplate'
import { IPedingSearch, columns } from './columns'
import { DataTable } from './data-table'
import FilterSearchBar from '@/components/ui/FilterSearchBarPendingSearch'

async function getData(): Promise<IPedingSearch[]> {
	const pendingSearchData: IPedingSearch[] = [
		{
			idAssistencia: 'A12345',
			nome: 'João Silva',
			ciaCliente: 'Cliente A',
			telefone: 11987654321,
			numeroAssistencia: 54321,
			dataPrimeroDisparo: new Date('2023-01-01T10:00:00'),
			tipoServico: 'Reparo',
			formato: 'E-mail',
			submit: 'Sim',
			tentativaContato: {
				status: 'Tentado',
				detalhes: 'Enviado e-mail de confirmação',
			},
			conversa: {
				mensagens: [
					{ de: 'Cliente', para: 'Suporte', mensagem: 'Qual o status do meu pedido?' },
					{ de: 'Suporte', para: 'Cliente', mensagem: 'Seu pedido está em processamento.' },
				],
			},
		},
		{
			idAssistencia: 'A67890',
			nome: 'Maria Oliveira',
			ciaCliente: 'Cliente B',
			telefone: 11987654322,
			numeroAssistencia: 12345,
			dataPrimeroDisparo: new Date('2023-02-01T10:00:00'),
			tipoServico: 'Instalação',
			formato: 'SMS',
			submit: 'Não',
			tentativaContato: {
				status: 'Pendente',
				detalhes: 'SMS não entregue',
			},
			conversa: {
				mensagens: [
					{ de: 'Cliente', para: 'Suporte', mensagem: 'Quando a instalação será realizada?' },
					{ de: 'Suporte', para: 'Cliente', mensagem: 'Estamos agendando para a próxima semana.' },
				],
			},
		},
		{
			idAssistencia: 'A11223',
			nome: 'Carlos Souza',
			ciaCliente: 'Cliente C',
			telefone: 11987654323,
			numeroAssistencia: 67890,
			dataPrimeroDisparo: new Date('2023-03-01T10:00:00'),
			tipoServico: 'Manutenção',
			formato: 'E-mail',
			submit: 'Sim',
			tentativaContato: {
				status: 'Sucesso',
				detalhes: 'E-mail entregue e lido',
			},
			conversa: {
				mensagens: [
					{ de: 'Cliente', para: 'Suporte', mensagem: 'A manutenção foi concluída com sucesso?' },
					{ de: 'Suporte', para: 'Cliente', mensagem: 'Sim, tudo foi resolvido.' },
				],
			},
		},
		{
			idAssistencia: 'A44556',
			nome: 'Ana Costa',
			ciaCliente: 'Cliente D',
			telefone: 11987654324,
			numeroAssistencia: 34567,
			dataPrimeroDisparo: new Date('2023-04-01T10:00:00'),
			tipoServico: 'Consulta',
			formato: 'SMS',
			submit: 'Não',
			tentativaContato: {
				status: 'Tentado',
				detalhes: 'SMS enviado, aguardando resposta',
			},
			conversa: {
				mensagens: [
					{ de: 'Cliente', para: 'Suporte', mensagem: 'Gostaria de agendar uma consulta.' },
					{ de: 'Suporte', para: 'Cliente', mensagem: 'Por favor, informe a data e hora desejada.' },
				],
			},
		},
		{
			idAssistencia: 'A78901',
			nome: 'Pedro Santos',
			ciaCliente: 'Cliente E',
			telefone: 11987654325,
			numeroAssistencia: 98765,
			dataPrimeroDisparo: new Date('2023-05-01T10:00:00'),
			tipoServico: 'Suporte Técnico',
			formato: 'E-mail',
			submit: 'Sim',
			tentativaContato: {
				status: 'Sucesso',
				detalhes: 'E-mail entregue e respondido',
			},
			conversa: {
				mensagens: [
					{ de: 'Cliente', para: 'Suporte', mensagem: 'Estou com problemas na conexão.' },
					{ de: 'Suporte', para: 'Cliente', mensagem: 'Reinicie o modem e tente novamente.' },
				],
			},
		},
	]
	return pendingSearchData
}

const Index: React.FC = () => {
	const [data, setData] = useState<IPedingSearch[]>([])
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
			<FilterSearchBar/>
			<div className=" m-10">
				<DataTable columns={columns} data={data} />
			</div>
		</BaseTemplate>
	)
}

export default Index
