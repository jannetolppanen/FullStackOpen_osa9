import axios from 'axios'
import { Weather } from './types'

export const getAllDiaryEntries = () => {
  return axios
  .get<Weather[]>('http://localhost:3000/api/diaries')
  .then(response => response.data)
}