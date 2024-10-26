import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class Iaxios {
  instance: AxiosInstance

  constructor(baseConfig: AxiosRequestConfig) {
    this.instance = axios.create(baseConfig)
  }
}

export default Iaxios
