import axios from 'axios'
const baseURL = import.meta.env.VITE_BASE_API
console.log(baseURL)
const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})
request.interceptors.request.use(
    (config:any) => {
        return config
    },
    (error) =>
        Promise.reject(error)
)

request.interceptors.response.use(
    function (response) {
        if (response.data.status !== 1000) {
            return Promise.reject({
                url: baseURL + response.config.url,
                code: response.data.status,
                message: response.data.message
            })
        }
        return response.data
    },
    function (error) {
        return Promise.reject({
            url: baseURL + error.config.url,
            code: error.code,
            message: error.message
        })
    }
)
export default request
