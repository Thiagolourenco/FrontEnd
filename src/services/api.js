import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backendw.herokuapp.com'
})

export default api