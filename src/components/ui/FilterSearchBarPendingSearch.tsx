import React from 'react'
import { DatePickerWithRange } from './DatePickerWithRange'
import { Button } from './button'
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { SetURLSearchParams } from 'react-router-dom'
import { DateProps, FilterForm } from '@/pages/PendingSearch'

export interface FilterProps {
	register: UseFormRegister<FilterForm>
	handleSubmit: UseFormHandleSubmit<FilterForm, undefined>
	setSearchParams: SetURLSearchParams
	setDate: React.Dispatch<React.SetStateAction<DateProps>>
}

const FilterSearchBarPendingSearch: React.FC<FilterProps> = ({register, handleSubmit, setSearchParams, setDate}) => {


	const handleFilter = (data: FilterForm) => {
		setSearchParams(state => {
			if(data.clientName) {
				state.set('clientName', data.clientName)
			} else {
				state.delete('clientName')
			}

			if(data.clientCia) {
				state.set('clientCia', data.clientCia)
			} else {
				state.delete('clientCia')
			}

			if(data.assistanceId) {
				state.set('assistanceId', data.assistanceId)
			} else {
				state.delete('assistanceId')
			}

			state.set('page', '1')

			if(state.get('dateFrom') !== null && state.get('dateTo') !== null) {
				console.log("entrou")
				setDate({dateFrom: state.get('dateFrom'), dateTo: state.get('dateTo')})
			} else {
				setDate({dateFrom: null, dateTo: null})
				state.delete('dateFrom')
				state.delete('dateTo')
			}

			return state
		})

	}

	return (
		<form onSubmit={handleSubmit(handleFilter)} className="px-5 py-3 w-full gap-2 flex flex-row items-center justify-end">
			
			<DatePickerWithRange setSearchParams={setSearchParams} className="border-slate-400" />
			<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
					<label htmlFor="assistanceId" className=''>Id da assistência</label>
					<input id='assistanceId' {...register('assistanceId')} className="w-full outline-none" placeholder="---" />
				</div>
			<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
				<label htmlFor="clientName" className=''>Nome do cliente</label>
				<input id='clientName' {...register('clientName')} className="w-full outline-none" placeholder="---" />
			</div>
			<div className="flex flex-col w-32 text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
				<label htmlFor="clientCia" className=''>CIA Cliente</label>
				<input id='clientCia' {...register('clientCia')} className="w-full outline-none" placeholder="---" />
			</div>
			<Button className="text-lg bg-[#104b94] h-10 px-3">Buscar</Button>
		</form>
	)
}

export default FilterSearchBarPendingSearch
