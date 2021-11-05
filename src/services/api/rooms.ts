import { AxiosResponse } from "axios"
import api from "."

export type params = {
  page: number,
  limit: number,
}

export type categoryResponse ={
  id: number,
  categoryName: string,
  qtyBeds: number,
  value: string
}

export type RoomsResponse = {
  id: number,
  roomNumber: string,
  howManyPeople: number,
  description: string,
  image: string,
  roomCategory?: categoryResponse,
}

export const getAll = (params: params): Promise<AxiosResponse<RoomsResponse[]>> => {
  return api.get<RoomsResponse[]>('/rooms')
}