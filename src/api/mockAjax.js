// 对axios进行二次封装
import axios from "axios"
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css"

const requests = axios.create({
  // 配置对象
  // 基本路径
  baseURL:'/mock',
  // 代表请求超时时间
  timeout:5000,
});

// 请求拦截器:在发送请求之前，请求拦截器可以检测到请求，并且对请求做一些事情
requests.interceptors.request.use((config)=>{
// config配置对象，对象里的Headers属性很重要
// 进度条开始动
nprogress.start()
return config
})

// 响应拦截器:
requests.interceptors.response.use((res)=>{
  // 响应成功的回调函数，服务器响应数据回来之后，相应拦截器可以检测到，做一些事情
  // 进度条结束
  nprogress.done()
  return res.data
},(error)=>{
  // 响应失败的回调函数
  return Promise.reject(new error('失败'))
})





// 对外暴露
export default requests