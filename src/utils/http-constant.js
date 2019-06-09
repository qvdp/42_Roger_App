import axios from 'axios'

// Build a unical instance of axios for store request
const API = axios.create({
  baseURL: 'https://www.omdbapi.com/?apikey=b42bf11b&'
})

export default API
