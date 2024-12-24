import { Client } from "./Client"

export interface StatusOptions {
	id: number
	status: string
	createdAt?: Date
	updatedAt?: Date
	client?: Client[]
}
