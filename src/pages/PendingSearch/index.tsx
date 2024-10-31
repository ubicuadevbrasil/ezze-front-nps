import React, { useEffect, useState } from 'react'
import { BaseTemplate } from '../layouts/BaseTemplate'
import { IPedingSearch, columns } from './columns'
import { DataTable } from './data-table'
import MiniChat from '@/components/ui/MiniChat'
import FilterSearchBar from '@/components/ui/FilterSearchBarPendingSearch'
import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'
import { getClients } from '../api/get-clients'
import { useSearchParams } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// async function getData(): Promise<IPedingSearch[]> {
// 	const pendingSearchData: IPedingSearch[] = [
// 		{
// 			idAssistencia: 'A12345',
// 			nome: 'João Silva',
// 			ciaCliente: 'Cliente A',
// 			telefone: 11987654321,
// 			numeroAssistencia: 54321,
// 			dataPrimeroDisparo: new Date('2023-01-01T10:00:00'),
// 			tipoServico: 'Reparo',
// 			formato: 'E-mail',
// 			submit: 'Sim',
// 			tentativaContato: {
// 				status: 'Tentado',
// 				detalhes: 'Enviado e-mail de confirmação',
// 			},
// 			conversa: {
// 				mensagens: [
// 					{ de: 'Cliente', para: 'Suporte', mensagem: 'Qual o status do meu pedido?' },
// 					{ de: 'Suporte', para: 'Cliente', mensagem: 'Seu pedido está em processamento.' },
// 				],
// 			},
// 		},
// 		{
// 			idAssistencia: 'A67890',
// 			nome: 'Maria Oliveira',
// 			ciaCliente: 'Cliente B',
// 			telefone: 11987654322,
// 			numeroAssistencia: 12345,
// 			dataPrimeroDisparo: new Date('2023-02-01T10:00:00'),
// 			tipoServico: 'Instalação',
// 			formato: 'SMS',
// 			submit: 'Não',
// 			tentativaContato: {
// 				status: 'Pendente',
// 				detalhes: 'SMS não entregue',
// 			},
// 			conversa: {
// 				mensagens: [
// 					{ de: 'Cliente', para: 'Suporte', mensagem: 'Quando a instalação será realizada?' },
// 					{ de: 'Suporte', para: 'Cliente', mensagem: 'Estamos agendando para a próxima semana.' },
// 				],
// 			},
// 		},
// 		{
// 			idAssistencia: 'A11223',
// 			nome: 'Carlos Souza',
// 			ciaCliente: 'Cliente C',
// 			telefone: 11987654323,
// 			numeroAssistencia: 67890,
// 			dataPrimeroDisparo: new Date('2023-03-01T10:00:00'),
// 			tipoServico: 'Manutenção',
// 			formato: 'E-mail',
// 			submit: 'Sim',
// 			tentativaContato: {
// 				status: 'Sucesso',
// 				detalhes: 'E-mail entregue e lido',
// 			},
// 			conversa: {
// 				mensagens: [
// 					{ de: 'Cliente', para: 'Suporte', mensagem: 'A manutenção foi concluída com sucesso?' },
// 					{ de: 'Suporte', para: 'Cliente', mensagem: 'Sim, tudo foi resolvido.' },
// 				],
// 			},
// 		},
// 		{
// 			idAssistencia: 'A44556',
// 			nome: 'Ana Costa',
// 			ciaCliente: 'Cliente D',
// 			telefone: 11987654324,
// 			numeroAssistencia: 34567,
// 			dataPrimeroDisparo: new Date('2023-04-01T10:00:00'),
// 			tipoServico: 'Consulta',
// 			formato: 'SMS',
// 			submit: 'Não',
// 			tentativaContato: {
// 				status: 'Tentado',
// 				detalhes: 'SMS enviado, aguardando resposta',
// 			},
// 			conversa: {
// 				mensagens: [
// 					{ de: 'Cliente', para: 'Suporte', mensagem: 'Gostaria de agendar uma consulta.' },
// 					{ de: 'Suporte', para: 'Cliente', mensagem: 'Por favor, informe a data e hora desejada.' },
// 				],
// 			},
// 		},
// 		{
// 			idAssistencia: 'A78901',
// 			nome: 'Pedro Santos',
// 			ciaCliente: 'Cliente E',
// 			telefone: 11987654325,
// 			numeroAssistencia: 98765,
// 			dataPrimeroDisparo: new Date('2023-05-01T10:00:00'),
// 			tipoServico: 'Suporte Técnico',
// 			formato: 'E-mail',
// 			submit: 'Sim',
// 			tentativaContato: {
// 				status: 'Sucesso',
// 				detalhes: 'E-mail entregue e respondido',
// 			},
// 			conversa: {
// 				mensagens: [
// 					{ de: 'Cliente', para: 'Suporte', mensagem: 'Estou com problemas na conexão.' },
// 					{ de: 'Suporte', para: 'Cliente', mensagem: 'Reinicie o modem e tente novamente.' },
// 				],
// 			},
// 		},
// 	]
// 	return pendingSearchData
// }

const filterForm = z.object({
	clientName: z.string().optional(),
	clientCia: z.string().optional(),
	assistanceId: z.string().optional(),
})

export type FilterForm = z.infer<typeof filterForm>

const Index: React.FC = () => {

	const [searchParams, setSearchParams] = useSearchParams()

	const clientName = searchParams.get('clientName')
	const clientCia = searchParams.get('clientCia')
	const assistanceId = searchParams.get('assistanceId')
	const dateFrom = searchParams.get('dateFrom')
	const dateTo = searchParams.get('dateTo')

	const {
		register,
		handleSubmit,
	} = useForm<FilterForm>({
		resolver: zodResolver(filterForm),
		defaultValues: {
			clientName: clientName ?? '',
			clientCia: clientCia ?? '',
			assistanceId: assistanceId ?? '',
		}
	})

	const pageNumber = z.coerce.number().parse(searchParams.get('page') ?? 1)
	const pageSize = 7

	const { data: result } = useQuery({
		queryKey: ['clients', pageNumber, pageSize, clientName, clientCia, assistanceId, dateFrom, dateTo],
		queryFn: () => getClients({pageNumber, pageSize, clientName, clientCia, assistanceId }),
	})

	

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const result = await getData()
	// 			setData(result)
	// 		} catch (error) {
	// 			console.error('Error fetching data:', error)
	// 		} finally {
	// 			setLoading(false)
	// 		}
	// 	}

	// 	fetchData()
	// }, [])

	// if (loading) {
	// 	return <div>Loading...</div>
	// }

	return (
		<BaseTemplate>
			<FilterSearchBar register={register} handleSubmit={handleSubmit} setSearchParams={setSearchParams}/>
			<div className="px-5 pt-2 pb-10 bg-white">
				<DataTable columns={columns} result={result} setSearchParams={setSearchParams} />
			</div>
			<MiniChat />
		</BaseTemplate>
	)
}

export default Index
