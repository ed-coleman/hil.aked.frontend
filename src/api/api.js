import axios from 'axios'

const api = axios.create({ baseURL: "http://localhost:5000"})

api.interceptors.request.use(
    async(config) => {
        const token = localStorage.getItem("authToken")
        console.log(token)
        const parsed = JSON.parse(token) || '""'
        console.log(parsed)
        console.log(token)

        if(parsed) {
            config.headers.Authorization = `Bearer ${parsed.token}`
            config.headers["Access-Control-Allow-Origin"] = "*"
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    }
)

export default api