import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Logo from '@/assets/Logo.svg'
import { CustomRoute, routes } from '@/routes/routes' // Ajuste para exportar o array de rotas
import { CaretDown, SignOut } from '@phosphor-icons/react'

const Navbar: React.FC = () => {
	return (
		<nav className="bg-slate-100 w-full h-16 flex items-center ">
			<a href="#" className="h-full max-h-full max-w-xs bg-[#104b94]">
				<img src={Logo} className="h-full max-h-full max-w-xs bg-[#104b94]" alt="Logo resolve assist" />
			</a>
			<div className="w-full px-10 flex flex-wrap items-center justify-between">
				<div className="hidden md:block w-full md:w-auto" id="mobile-menu">
					<ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
						{routes.map((route, index) => {
							return route.isShowed ? route.children ? <Dropdown labelGroup={route.label} routesGroup={route.children} /> : <Button key={index} label={route.label} route={route.path} /> : <></>
						})}
					</ul>
				</div>
				<div className="flex items-center ml-auto">
					<button className="flex flex-row justify-center items-center gap-x-1">
						Logout
						<SignOut size={20} />
					</button>
				</div>
			</div>
		</nav>
	)
}

interface ButtonType {
	route: string,
	label: string
}

const Button: React.FC<ButtonType> = ({route = '#', label = 'Default link'}) => {
	return (
		<>
			<li>
				<a href={route} className="relative inline-block text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-transparent hover:after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out" aria-current="page">
					{label}
				</a>
			</li>
		</>
	)
}

interface DropdownType {
	labelGroup: string,
	routesGroup: CustomRoute[]

}

const Dropdown: React.FC<DropdownType> = ({labelGroup, routesGroup}) => {
	return (
		<>
			<li>
				<DropdownMenu>
					<DropdownMenuTrigger className="flex flex-row justify-center items-center gap-x-1 hover:text-blue-600 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-transparent hover:after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out">
						<p className="relative inline-block text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-transparent hover:after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out">
							{labelGroup}
						</p>
						<CaretDown size={20} />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{routesGroup.map((route, index) => {
							return (
								<a key={index} href={route.path} className="text-black md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-black md:p-0 rounded focus:outline-none" aria-current="page">
									<DropdownMenuItem>{route.label}</DropdownMenuItem>
								</a>
							)
						})}
					</DropdownMenuContent>
				</DropdownMenu>
			</li>
		</>
	)
}

export default Navbar
