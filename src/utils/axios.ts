import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 2000
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (response: any) => {
    // 这里对响应的数据进行处理 最后再return
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: { response: { data: { ElMessage: any }; status: any } }) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.ElMessage
      ElMessage.error(`Code:${code},Message:${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
