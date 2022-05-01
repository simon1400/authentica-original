import axios from 'axios'

export const AxiosAPI = axios.create({
  baseURL: "http://localhost:1340/api",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
