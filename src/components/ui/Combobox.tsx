// Combobox.tsx
import React from 'react'

interface ComboboxProps {
	options: string[]
	label: string
	onSelected: (value: string | null) => void // Change this to 'void' for onSelected
	selected: string | null
}

export const Combobox: React.FC<ComboboxProps> = ({ options, label = 'Selecione uma opção', onSelected, selected }) => {
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onSelected(event.target.value)
	}

	return (
		<div className="w-full grid gap-2">
			<div className="border rounded-2xl border-slate-400"></div>
			<select value={selected || ''} onChange={handleSelectChange} className="p-2 rounded-md border first-letter: bg-transparent border-slate-400">
				<option value="" disabled hidden>
					{label}
				</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}
