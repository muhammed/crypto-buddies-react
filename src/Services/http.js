import { USER_TOKEN } from '@/Constants/storage'
import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.headers.get.Pragma = 'no-cache'
  axios.defaults.headers.get['Cache-Control'] = 'no-cache, no-store'
}

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use(
  async (config) => {
    const authToken = localStorage.getItem(USER_TOKEN)
    if (authToken) {
      config.headers.Authorization = authToken
    }
    return config
  },
  (error) => Promise.reject(error)
)

http.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default http
