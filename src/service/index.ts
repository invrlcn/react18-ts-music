import { BASE_URL, TIME_OUT } from './config'
import CNRequest from './request'

const cnRequest = new CNRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => config
  }
})

export default cnRequest
