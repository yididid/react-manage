import React,{lazy} from "react"

//Navigate重定向组件
import { Navigate } from "react-router-dom"
import Home from '../views/Home'
import Login from '../views/Login'
const Page301 = lazy(()=>import('../views/Page301'))
const Page1 = lazy(()=>import('../views/Page1'))
const Page2 = lazy(()=>import('../views/Page2'))

const withLoadingComponent=(comp:JSX.Element)=>(
  <React.Suspense fallback={<div>Loading</div>}>
    {comp}
  </React.Suspense>
)

const routes =[
  //嵌套路由开始
  {
    path:"/",
    element:<Navigate to="/page1"></Navigate>
  },
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:"/page1",
        element:withLoadingComponent(<Page1></Page1>)
      },
      {
        path:"/page2",
        element:withLoadingComponent(<Page2></Page2>)
      },
      {
        path:"/page3/page301",
        element:withLoadingComponent(<Page301></Page301>)
      }
    ]
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  //访问其他路径时候直接跳转到首页
  {
    path:"*",
    element:<Navigate to="/page1"></Navigate>
  }
]

export default routes
