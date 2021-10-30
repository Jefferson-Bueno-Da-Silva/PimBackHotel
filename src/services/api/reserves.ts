import api from "."
import { AxiosResponse } from "axios"
import { RoomsResponse } from "./rooms"

export type params = {
  page: number,
  limit: number,
}

export type BookingResponse = {
  id_reserva: number,
  data_entrada: string,
  data_saida: string,
  id_user: number,
  room: RoomsResponse,
}

export const getAll = (params: params): Promise<AxiosResponse<BookingResponse[]>> => {
  return api.get<BookingResponse[]>('/reserves')
}