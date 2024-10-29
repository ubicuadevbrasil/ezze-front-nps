export interface DashboardResponse {
	closedDeals48hPercent?: number
	closedDeals48hOverTime?: ClosedDeals48hOverTime[]
	dealsTable?: DealsTable
	qualityManagerPerformance?: QualityManagerPerformance[]
	reasonsTracking?: ReasonsTracking[]
	macroMicroIndicator?: MacroMicroIndicator[]
	solutionIndicator?: SolutionIndicator[]
	dealOrigin?: DealOrigin[]
	satisfactionAfterContact?: DataPoint[]
}

export interface ClosedDeals48hOverTime {
	month: string
	alerts: number
}

export interface DealsTable {
	header: Header[]
	rows: DealsTableRow[]
}

export interface Header {
	type: string
	count: number
	color: string
}

export interface DealsTableRow {
	category: string
	new: number
	overdue: number
	escalated: number
	ongoing: number
	closed: number
	total: number
}

export interface QualityManagerPerformance {
	name: string
	alertCount: number
	closedPercent: string
	closedIn48hPercent: string
	avgClosingTime: string
	delayedPercent: string
	escalatedPercent: string
}

export interface ReasonsTracking {
	reason1: string
	reason2: string
	reason3: string
	reason4: string
	reason5: string
	quantity: number
	percent: string
}

export interface MacroMicroIndicator {
	macro: string
	micro: string
	quantity: number
	percent: string
}

export interface SolutionIndicator {
	solution: string
	quantity: string
	percent: string
}

export interface DealOrigin {
	month: string
	closedAlerts: number
	valid: string
	invalid: string
}

export interface DataPoint {
	month: string
	yes: number
	no: number
}
