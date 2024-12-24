export interface Role {
	id: number
	roleName: string
	roleDescription: string
	deleted?: boolean | null
	createdAt?: Date | null
	updatedAt?: Date | null
}
