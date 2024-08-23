import axios from "axios";
const service = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 5000,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
})

service.interceptors.request.use(config => {
    return config
}), error => {
    return Promise.reject(error)
}

service.interceptors.response.use(response => {
    return response.data
}), error => {
    return Promise.reject(new Error(error))
}

export default service