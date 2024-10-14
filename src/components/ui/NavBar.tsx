import { useLocation } from 'react-router-dom'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Logo from '@/assets/Logo.svg'
import { CustomRoute, routes } from '@/routes/routes'
import { CaretDown, SignOut } from '@phosphor-icons/react'

const Navbar: React.FC = () => {
	const location = useLocation()
	const currentPath = location.pathname
	console.table(routes)

	return (
		<nav className="bg-white w-auto h-14 flex items-center ">
			<a href="/" className="h-full max-h-full max-w-xs bg-[#104b94]">
				<img src={Logo} className="h-full max-h-full max-w-xs bg-[#104b94]" alt="Logo resolve assist" />
			</a>
			<div className="w-full h-full flex flex-wrap items-center justify-between">
				<div className="hidden h-full md:block w-full md:w-auto" id="mobile-menu">
					<ul className="flex-col md:h-full md:flex-row flex  mt-4 md:mt-0 md:text-sm">
						{routes.map((route, index) => {
							return route.isShowed ? route.children ? <Dropdown key={index} labelGroup={route.label} routesGroup={route.children} currentPath={currentPath} /> : <Button key={index} label={route.label} route={route.path} isActive={currentPath === route.path} /> : null
						})}
					</ul>
				</div>
				<div className="flex items-center ml-auto ">
					<button className="flex flex-row h-full px-7 py-4 justify-center items-center gap-x-1">
						Logout
						<SignOut size={20} />
					</button>
				</div>
			</div>
		</nav>
	)
}

interface ButtonType {
	route: string
	label: string
	isActive: boolean
}

const Button: React.FC<ButtonType> = ({ route, label, isActive }) => {
	return (
		<>
			<li>
				<a
					href={route}
					className="relative flex w-full h-full p-4 items-center justify-center text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-transparent hover:after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out"
					aria-current="page">
					{label}
				</a>
			</li>
		</>
	)
}

interface DropdownType {
	labelGroup: string
	routesGroup: CustomRoute[]
	currentPath: string
}

const Dropdown: React.FC<DropdownType> = ({ labelGroup, routesGroup, currentPath }) => {
	const isSubPageActive = routesGroup.some((route) => currentPath === `/${route.path}`)

	return (
		<>
			<li>
				<DropdownMenu>
					<DropdownMenuTrigger className="flex flex-row justify-center h-full  items-center outline-none hover:text-blue-600 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-transparent hover:after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out">
						<p className="relative flex items-center gap-1 w-full text-gray-800 h-full p-4 hover:text-blue-600 transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-transparent hover:after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out">
							{labelGroup}
							<CaretDown size={14} />
						</p>
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
