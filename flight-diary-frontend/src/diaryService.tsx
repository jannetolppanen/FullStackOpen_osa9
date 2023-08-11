import axios from 'axios'
import { FlightDiaryEntry, NewEntry } from './types'

export const getAllDiaryEntries = () => {
  return axios
  .get<FlightDiaryEntry[]>('http://localhost:3001/api/diaries')
  .then(response => response.data)
}

export const createEntry = (object: NewEntry) => {
  return axios
    .post<FlightDiaryEntry>('http://localhost:3001/api/diaries', object)
    .then(response => response.data)
}
