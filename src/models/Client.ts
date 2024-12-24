import { Alerts, AlertTypes } from "./Alerts"
import { StatusOptions } from "./Status"

export interface Client {
	id: number
	clientName: string
	clientEmail?: string
	clientCIA: string
	phoneNumber: string
	assistanceNumber: string
	date?: Date
	serviceType?: string
	format?: string
	status: boolean
	deleted: boolean
	contactAttempt?: string[]
	conversation?: string[]
	email?: string
	comment?: string
	assignment?: string
	createdAt?: Date
	updatedAt?: Date
	statusOptionsId?: number
	statusOptions?: StatusOptions
	alertTypesId?: number
	alertTypes?: AlertTypes
	alerts?: Alerts[]
}
