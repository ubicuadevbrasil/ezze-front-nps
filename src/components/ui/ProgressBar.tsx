import React from 'react'

interface ProgressBarProps {
	percentage: number // Percentage value from 0 to 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage}) => {
	const getBackgroundColor = () => {
		if (percentage <= 33) return 'bg-red-600'
		if (percentage <= 70) return 'bg-yellow-600'
		return 'bg-green-600'
	}

	return (
		<div className="w-full rounded-lg h-8 flex items-center flex-col gap-3">
			<div className={`h-full text-white flex self-start items-center justify-end pr-3 font-bold text-xl ${getBackgroundColor()}`} style={{ width: `${percentage}%` }}>
				{percentage*0.1}
			</div>
		</div>
	)
}

export default ProgressBar
