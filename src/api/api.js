import axios from 'axios'

const api = axios.create({ baseURL: "https://hil-aked-backend.adaptable.app"})

api.interceptors.request.use(
    async(config) => {
        const token = localStorage.getItem("authToken")
    

        if(token) {
            config.headers.Authorization = `Bearer ${token}`
            config.headers["Access-Control-Allow-Origin"] = "*"
        }
        return config
    }, (error) => {
        return Promise.reject(error)
    }
)

export default api