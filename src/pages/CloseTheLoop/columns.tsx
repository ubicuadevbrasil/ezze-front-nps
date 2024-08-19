'use client'

import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ICloseTheLoop = {
	numeroAssistencia: number
	nome: string
	ciaCliente: string
	email: string
	comentario: string
	atribuicao: string
	tentativaContato: number
	status: 'Novo' | 'Andamento' | 'Escalonado' | 'Concluido' | 'Atrasado'
	alerta: 'Promotor' | 'Neutro' | 'Detrator'
	contato: object
}

export const columns: ColumnDef<ICloseTheLoop>[] = [
	{
		accessorKey: 'numeroAssistencia',
		header: 'N. de assistência',
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
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'comentario',
		header: 'Comentário',
	},
	{
		accessorKey: 'atribuicao',
		header: 'Atribuição',
	},
	{
		accessorKey: 'tentativaContato',
		header: 'Tentativa Contato',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'alerta',
		header: 'Alerta',
	},
	{
		accessorKey: 'contato',
		header: 'Contato',
	},
]
