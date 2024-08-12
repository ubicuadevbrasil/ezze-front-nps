'use client'

import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type IPedingSearch = {
	idAssistencia: string
	nome: string
	ciaCliente: string
	telefone: number
	numeroAssistencia: number
	dataPrimeroDisparo: Date
	tipoServico: string
	formato: 'E-mail' | 'SMS'
	submit: 'Sim' | 'Não'
	tentativaContato: object
	conversa: object
}

export const columns: ColumnDef<IPedingSearch>[] = [
	{
		accessorKey: 'idAssistencia',
		header: 'ID da Assistência',
	},
	{
		accessorKey: 'nome',
		header: 'Nome do Cliente',
	},
	{
		accessorKey: 'ciaCliente',
		header: 'CIA Cliente',
	},
	{
		accessorKey: 'telefone',
		header: 'Telefone do Cliente',
	},
	{
		accessorKey: 'numeroAssistencia',
		header: 'N. de assistência',
	},
	{
		accessorKey: 'dataPrimeroDisparo',
		header: 'Data do primero disparo',
	},
	{
		accessorKey: 'tipoServico',
		header: 'Tipo de Serviço',
	},
	{
		accessorKey: 'formato',
		header: 'Formato (E-mail ou SMS)',
	},
	{
		accessorKey: 'submit',
		header: 'Teve Submit (Sim/Não)',
	},
	{
		accessorKey: 'tentativaContato',
		header: 'Tentativa Contato',
	},
	{
		accessorKey: 'conversa',
		header: 'Conversa',
	},
]
