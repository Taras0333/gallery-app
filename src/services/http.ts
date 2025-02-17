import $axios from 'axios'

export const axios = $axios.create({
  baseURL: 'https://gallery-api-kwa8.onrender.com',
})

export default axios
