import Axios from 'axios'

const baseURL = 'https://api.github.com'

const client = Axios.create({
  baseURL,
  timeout: 20000
})

// Intercept before sending HTTP requests
client.interceptors.request.use(
  (response) => {
    /**
     * you can process config here
     */
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
// Intercept after received HTTP requests
client.interceptors.response.use(
  (response) => {
    /**
     * you can process response and error here
     */
    return response
  },
  (error) => {
    // if (error.response && error.response.data) {
    //   // const code = error.response.status
    //   // const msg = error.response.data.ElMessage
    //   console.error(`[Axios Error]`, error.response)
    // } else {
    // }
    return Promise.reject(error)
  }
)
export default client
