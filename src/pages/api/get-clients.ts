import apiClient from '@/services/apiClient'

export interface Client {
  id: string
  clientName: string
  clientCIA: string
  phoneNumber: string
  assistanceNumber: string
  date: Date
  serviceType: string
  format: string
  status: boolean
  deleted: boolean
  contactAttempt: string[]
  conversation: string[]
}

export interface GetClientsResponse {
  totalItens: number
  totalPages: number
  PageNumber: number
  clients: Client[]
}

export interface GetClientsQuery {
  pageNumber?: number | null
  pageSize?: number | null
  clientName?: string | null
  clientCia?: string | null
  assistanceId?: string | null
  dateFrom?: string | null
  dateTo?: string | null
}

export async function getClients({pageNumber, pageSize, clientName, clientCia, assistanceId}: GetClientsQuery) {
  const response = await apiClient.get<GetClientsResponse>('/getAllByPagination', {
    params: {
      pageNumber,
      pageSize,
      clientName,
      clientCia,
      assistanceId
    }
  })

  return response.data
}