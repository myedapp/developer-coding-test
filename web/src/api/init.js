import axios from 'axios'

const baseURL = 'http://localhost:7000'

// Create an axios instance
const api = axios.create({
  baseURL
})

export default api
