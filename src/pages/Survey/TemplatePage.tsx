import React from 'react'
import Logo from '@/assets/Logo.svg'
import { Link } from 'react-router-dom'

interface TemplatePageProps {
	children: React.ReactNode
	backgroundColor?: string
	containerColor?: string
	logoSrc?: string
}

export const TemplatePage: React.FC<TemplatePageProps> = ({
	children,
	backgroundColor = '#4a70be', // Cor padrão de fundo
	containerColor = '#f1f3fe', // Cor padrão do container
	logoSrc = Logo, // Logo padrão
}) => {
	return (
		<div className={`flex justify-center items-center min-h-screen`} style={{ backgroundColor }}>
			<div className={`shadow-lg p-6 w-full max-w-md h-screen flex flex-col gap-5 justify-center`} style={{ backgroundColor: containerColor }}>
				<div className="flex justify-center">
					<div className="bg-[#104b94] w-full h-16 rounded-lg flex items-center justify-center">
						<Link to={'/'}>
						<img src={logoSrc} alt="Logo" className="h-16" />
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					{children}
				</div>
			</div>
		</div>
	)
}
