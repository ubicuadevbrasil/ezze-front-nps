import { Badge } from "./badge"

export function Status({ data }: { data: string }) {
	if (data === 'Concluido' || data === 'Promotor') {
		return (
			<Badge className="text-xs border justify-center w-full border-green-600 bg-green-100 rounded py-1 px-4" variant={'outline'}>
				{data}
			</Badge>
		)
	} else if (data === 'Novo' || data === 'Neutro') {
		return (
			<Badge className="text-xs border justify-center w-full border-yellow-600 bg-yellow-100 rounded py-1 px-4" variant={'outline'}>
				{data}
			</Badge>
		)
	} else if (data === 'Atrasado' || data === 'Detrator') {
		return (
			<Badge className="text-xs border justify-center w-full border-red-600 bg-red-100 rounded py-1 px-4" variant={'outline'}>
				{data}
			</Badge>
		)
	} else if (data === 'Andamento') {
		return (
			<Badge className="text-xs border justify-center w-full border-orange-600 bg-orange-100 rounded py-1 px-4" variant={'outline'}>
				{data}
			</Badge>
		)
	} else {
		return (
			<Badge className="text-xs border justify-center w-full border-blue-600 bg-blue-100 rounded py-1 px-4" variant={'outline'}>
				{data}
			</Badge>
		)
	}
}
