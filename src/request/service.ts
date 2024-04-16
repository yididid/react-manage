//处理请求拦截和响应拦截
//引入
import axios  from "axios";


//判断一下用户是否登录
function getToken(){ //获取token
  return sessionStorage.getItem('token')
}

//3创建axios实例
let httpClient = axios.create({
  baseURL:"/api",
  timeout:6000,
  withCredentials:true
})

//4创建请求拦截和响应拦截
httpClient.interceptors.request.use(
    //成功
    config=>{
      if(getToken()){
        config.headers['token']=getToken();
      }
      //返回
      return config
    },
    //错误
    err=>{
      return Promise.reject(err)
    }
  )
  //响应拦截
  httpClient.interceptors.response.use(
    //成功
    response=>{
      
      let res = response.data
      if(res.code=='401'){
        window.location.href='/login'
      }
      return Promise.resolve(res)
    },
    //错误
    err=>{
      return Promise.reject(err)
    }
  )

// 封装get请求
export const GET = (url:any, config = {}) => httpClient.get(url, config);
 
// 封装post请求
export const POST = (url:any, data = {}, config = {}) => httpClient.post(url, data, config);
 
// 封装put请求
export const PUT = (url:any, data = {}, config = {}) => httpClient.put(url, data, config);
 
// 封装delete请求
export const DEL = (url:any, config = {}) => httpClient.delete(url, config);