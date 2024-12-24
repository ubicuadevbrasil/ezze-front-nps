import { PivotUserRoleDto } from "./PivotUserRoleDto"
import { Role } from "./Role"
import { User } from "./User"

export interface CardResumeService {
	id: number
	inService: number
	servicesToday: number
	closedToday: number
	averageServiceTime: number
}

export interface Employees {
	user: User
	role: Role
	pivotUserRoleDto?: PivotUserRoleDto
	isOnline?: boolean
}
