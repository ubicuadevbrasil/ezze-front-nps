import React, { useEffect, useState } from 'react'
import { PendingSearchTemplate } from '../layouts/PendingSearchTemplate'
import { Payment, columns } from './columns'
import { DataTable } from './data-table'

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: '728ed52f',
			amount: 100,
			status: 'pending',
			email: 'm@example.com',
		},
		// ...
	]
}

const Index: React.FC = () => {
	const [data, setData] = useState<Payment[]>([])
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
		<PendingSearchTemplate>
			<div className=' m-10'>
			<DataTable columns={columns} data={data} />

			</div>
		</PendingSearchTemplate>
	)
}

export default Index
