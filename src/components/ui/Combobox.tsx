import { useState } from "react"

interface ComboboxProps {
	options: string[]
	label: string
	// onSelected: (selection) => void | null
}



export const Combobox: React.FC<ComboboxProps> = ({ options, label,  }) => {
	const [selectedOption, setSelectedOption] = useState<string | null>(null)

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value)
		// onSelected(event.target.value)
	}

	return (
		<div className="w-full grid gap-2">
			<select value={selectedOption || ''} onChange={handleSelectChange} className="p-2 rounded-md border bg-transparent text-slate-500">
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
