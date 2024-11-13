'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { DateRange } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { SetURLSearchParams } from 'react-router-dom'

interface DataPickerProps {
	className: string
	setSearchParams: SetURLSearchParams
}

export function DatePickerWithRange({ className, setSearchParams }: DataPickerProps) {
	const [date, setDate] = React.useState<DateRange | undefined>()
	function handleSearchParams(date: DateRange | undefined) {
		setSearchParams(prev => {
			if(date && date.from) {
				prev.set('dateFrom', format(date.from, 'yyyy-MM-dd'))
			} else {
				prev.delete('dateFrom')
			}

			if(date &&  date.to) {
				prev.set('dateTo', format(date.to, 'yyyy-MM-dd'))
			} else {
				prev.delete('dateTo')
			}

			return prev
		})
	}

	React.useEffect(() => {
			handleSearchParams(date)
	}, [date])


	return (
		<div className={cn('grid gap-2', className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id="date"
						variant={'outline'}
						className={cn(
							'flex gap-2 h-10 px-2 justify-start text-left font-normal',
							!date && 'text-muted-foreground',
							'border border-slate-400' // Adiciona borda escura
						)}>
						<div className="flex flex-col ">
							<span className='text-[10px] leading-3'>Período</span>
							<span className="text-[10px] leading-3 text-[#ABB1C2]">
								{date?.from ? (
									date.to ? (
										<>
											{format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
										</>
									) : (
										format(date.from, 'LLL dd, y')
									)
								) : (
									'DD-MM-YYYY - DD-MM-YYYY'
								)}
							</span>
						</div>

						<CalendarIcon className="" />

					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
				</PopoverContent>
			</Popover>
		</div>
	)
}
