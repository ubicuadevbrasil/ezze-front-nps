import { SetURLSearchParams } from "react-router-dom";

export interface DashboardFilter {
	cia: string
	negocio: string
	motivo: string
	data: SetURLSearchParams
}
