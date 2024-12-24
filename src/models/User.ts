import { Alerts } from "./Alerts"

export interface User {
	id: number
	password: string
	date?: Date
	status?: boolean
	deleted?: boolean
	phoneNumber: string
	email: string
	validationCode?: string
	username: string
	name: string
	supervisor: string
	alerts?: Alerts[]
	lastActivity?: Date
	toLogOut?: boolean
}
