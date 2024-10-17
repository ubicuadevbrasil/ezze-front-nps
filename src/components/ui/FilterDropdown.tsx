import { ChevronsUpDown } from 'lucide-react'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Checkbox } from './checkbox'
import { useState } from 'react'

interface Option {
	value: string
	label: string
}

interface FilterDropdownProps {
	label: string
	options: Option[]
	selectedValue: string
	setSelectedValue: (value: string) => void
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, selectedValue, setSelectedValue }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button variant="outline" role="combobox" aria-expanded={isOpen} className="w-[200px] justify-between text-gray-500 font-normal">
					{selectedValue ? options.find((option) => option.value === selectedValue)?.label : label}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0 flex gap-5 flex-col p-3">
				{options.map((option) => (
					<div key={option.value} className="flex items-center space-x-2">
						<Checkbox
							className="border-gray-400"
							id={option.value}
							value={option.value}
							checked={selectedValue === option.value}
							onChange={(e) => {
								const currentValue = e.target as HTMLInputElement // Caste o target para HTMLInputElement
								setSelectedValue(currentValue.checked ? currentValue.value : '')
								setIsOpen(false)
							}}
						/>
						<label htmlFor={option.value} className="text-sm text-gray-700 font-medium leading-none">
							{option.label}
						</label>
					</div>
				))}
			</PopoverContent>
		</Popover>
	)
}

export default FilterDropdown
