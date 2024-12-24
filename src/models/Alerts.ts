import { Client } from "./Client"

export interface Alerts {
	id: number
	clientId: number
	alertOptionsId: number
	userId: number
	alertTypesId?: number
	alertOptions?: AlertaOptions
	alertTypes?: AlertTypes
	client?: Client
	createdAt?: Date
	updatedAt?: Date
	closed: boolean
}

export interface AlertaOptions {
	id: number
	alerta: string
	createdAt?: Date
	updatedAt?: Date
	alertTypes?: AlertTypes[]
	alerts?: Alerts[]
}

export interface AlertTypes {
	id: number
	alertaType: string
	createdAt?: Date
	updatedAt?: Date
	alertaOptions?: AlertaOptions[]
	alerts?: Alerts[]
}
