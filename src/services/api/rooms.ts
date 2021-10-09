import { hotelData } from "../../utils/apiMock"

export type params = {
  page: number,
  limit: number,
}

export type RoomsResponse = {
  id: string,
  imagePick: string,
  RoomName: string,
  location: string,
  occupation: number,
  time: number,
  price: number
}

export const getAll = (params: params): Promise<RoomsResponse[]> => {
  return new Promise((resolve, reject) => {
    resolve(hotelData)
  })
}