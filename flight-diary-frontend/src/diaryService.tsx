import axios from 'axios'
import { Weather, NewEntry } from './types'

export const getAllDiaryEntries = () => {
  return axios
  .get<Weather[]>('http://localhost:3000/api/diaries')
  .then(response => response.data)
}

export const createEntry = (object: NewEntry) => {
  return axios
    .post<Weather>('http://localhost:3001/notes', object)
    .then(response => response.data)
}