import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

class Iaxios {
  instance: AxiosInstance

  constructor(baseConfig: AxiosRequestConfig) {
    this.instance = axios.create(baseConfig)
  }
}

export default Iaxios
