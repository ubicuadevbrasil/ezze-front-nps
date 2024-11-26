'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover'
import { CaretDown } from '@phosphor-icons/react'

const FormSchema = z.object({
	items: z.array(z.string()).refine((value) => value.length > 0, {
		message: 'You have to select at least one item.',
	}),
})

interface Item {
	label: string
	value: string
}

interface DropdownProps {
	items: Item[]
	selectedItems: Item[]
	onSelect: (selectedItems: Item[]) => void
	placeholder?: string
	title?: string
}

const Dropdown: React.FC<DropdownProps> = ({ items, selectedItems = [], onSelect, placeholder = 'Selecione', title }) => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			items: selectedItems.map((item) => item.value), // Convertendo objetos em strings para o formulário
		},
	})

	return (
		<Form {...form}>
			<FormField
				control={form.control}
				name="items"
				render={({ field }) => (
					<FormItem>
						<Popover>
							<PopoverTrigger asChild>
								<div className="flex h-10 items-center px-3 border border-slate-400 rounded-md -md bg-white cursor-pointer">
									<div className="flex flex-col w-full text-[10px] leading-3 justify-center">
										<span className="text-[10px] leading-3">{title}</span>
										<div className="text-[#a8b1c2]">{field.value.length > 0 ? field.value.join(', ') : placeholder}</div>
									</div>
									<CaretDown size={24} />
								</div>
							</PopoverTrigger>
							<PopoverContent className="w-[200px] p-3 border border-slate-400 bg-white flex flex-col z-50 gap-2 rounded-md -lg">
								{items.map((item) => (
									<FormField
										key={item.value}
										control={form.control}
										name="items"
										render={({ field }) => {
											const isChecked = field.value.includes(item.value)

											return (
												<FormItem className="flex flex-row items-start space-x-3 space-y-0">
													<FormControl>
														<Checkbox
															checked={isChecked}
															onCheckedChange={(checked) => {
																const newSelectedItems = checked ? [...field.value, item.value] : field.value.filter((value) => value !== item.value)

																field.onChange(newSelectedItems)
																onSelect(items.filter((i) => newSelectedItems.includes(i.value))) // Passando os itens selecionados para o onSelect
															}}
														/>
													</FormControl>
													<FormLabel className="font-normal">{item.label}</FormLabel>
												</FormItem>
											)
										}}
									/>
								))}
								<FormMessage />
							</PopoverContent>
						</Popover>
					</FormItem>
				)}
			/>
		</Form>
	)
}

export default Dropdown
