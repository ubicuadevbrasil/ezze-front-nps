import { useLocation } from 'react-router-dom'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Logo from '@/assets/Logo.svg'
import { CustomRoute, routes } from '@/routes/routes'
import { CaretDown, SignOut } from '@phosphor-icons/react'

const Navbar: React.FC = () => {
	const location = useLocation()
	const currentPath = location.pathname

	return (
		<nav className="bg-white w-auto h-16 flex items-center relative">
			<a href="/" className="h-full max-h-full max-w-xs bg-[#104b94]">
				<img src={Logo} className="h-full max-h-full max-w-xs bg-[#104b94]" alt="Logo resolve assist" />
			</a>
			<div className="w-full px-10 flex flex-wrap items-center justify-between">
				<div className="hidden md:block w-full md:w-auto" id="mobile-menu">
					<ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
						{routes.map((route, index) => {
							return route.isShowed ? route.children ? <Dropdown key={index} labelGroup={route.label} routesGroup={route.children} currentPath={location.pathname} /> : <Button key={index} label={route.label} route={route.path} isActive={location.pathname === route.path} /> : null
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
	route: string
	label: string
	isActive: boolean
}

const Button: React.FC<ButtonType> = ({ route, label, isActive }) => {
	return (
		<li className="relative group">
			<a
				href={route}
				className={`relative inline-block text-gray-800 hover:text-[#1e3868] transition duration-300 ease-in-out after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-5 after:h-1 after:bg-transparent group-hover:after:bg-[#1e3868] after:transition-all after:duration-300 after:ease-in-out ${isActive ? 'after:bg-[#1e3868] text-[#1e3868]' : ''}`}
				aria-current={isActive ? 'page' : undefined}>
				{label}
			</a>
		</li>
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
		<li className="relative group">
			<DropdownMenu>
				<DropdownMenuTrigger className={`flex flex-row justify-center items-center gap-x-1 hover:text-[#1e3868] transition duration-300 ease-in-out`}>
					<p className="relative inline-block group-hover:text-[#1e3868] transition duration-300 ease-in-out">{labelGroup}</p>
					<CaretDown size={20} />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="mt-2">
					{routesGroup.map((route, index) => {
						const fullPath = `/${route.path}`
						const isActive = currentPath === fullPath
						return (
							<a key={index} href={fullPath} className={`block px-4 py-2 text-black transition-colors rounded ${isActive ? 'bg-blue-100 text-[#1e3868] font-bold' : ''}`} aria-current={isActive ? 'page' : undefined}>
								<DropdownMenuItem>{route.label}</DropdownMenuItem>
							</a>
						)
					})}
				</DropdownMenuContent>
			</DropdownMenu>
			<div className={`absolute left-0 right-0 bottom-[-16px] h-0.5 transition-all duration-300 ease-in-out ${isSubPageActive ? 'bg-[#1e3868]' : 'bg-transparent group-hover:bg-[#1e3868]'}`} />
		</li>
	)
}

export default Navbar
