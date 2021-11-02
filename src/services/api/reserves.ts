import api from "."
import { AxiosResponse } from "axios"
import { RoomsResponse } from "./rooms"

export type params = {
  checkin: boolean
}

export type BookingResponse = {
  id_reserva: number,
  data_entrada: string,
  data_saida: string,
  id_user: number,
  id_quarto: number,
  checkin: boolean,
  room: RoomsResponse,
}

export const getAll = (params: params): Promise<AxiosResponse<BookingResponse[]>> => {
  return api.get<BookingResponse[]>('/reserves', {params})
}

export type bodyReserves = {
  data_entrada: string,
  data_saida: string,
  id_user: number,
  id_quarto: number,
}

export type createResponse = {
  data_entrada: string,
  data_saida: string,
  id_user: number,
  id_quarto: number,
  id_reserva: number
}

export const create = (body: bodyReserves): Promise<AxiosResponse<createResponse>> => {
  return api.post<createResponse>('/reserves', body)
}

export type bodyCheckin = {
  checkin: boolean;
}

export const checkin = (id: number, body: bodyCheckin): Promise<AxiosResponse<bodyCheckin>> => {
  return api.patch<bodyCheckin>(`/reserves/${id}`, body)
}