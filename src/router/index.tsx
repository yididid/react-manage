import React,{lazy} from "react"

//Navigate重定向组件
import { Navigate } from "react-router-dom"
import Home from '../views/Home'
import HomePage from '../views/HomePage'
import Login from '../views/Login'
const Page301 = lazy(()=>import('../views/Page301'))
const Store = lazy(()=>import('../views/Store'))
const GoodsList = lazy(()=>import('../views/Goods/GoodsList'))
const GoodsEdit = lazy(()=>import('../views/Goods/GoodsEdit'))

const withLoadingComponent=(comp:JSX.Element)=>(
  <React.Suspense fallback={<div>Loading</div>}>
    {comp}
  </React.Suspense>
)

const routes =[
  //嵌套路由开始
  {
    path:"/",
    element:<Navigate to="/index"></Navigate>
  },
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:"/index",
        element:withLoadingComponent(<HomePage></HomePage>)
      },
      {
        path:"/store",
        element:withLoadingComponent(<Store></Store>)
      },
      {
        path:"/goods/list",
        element:withLoadingComponent(<GoodsList></GoodsList>)
      }
      ,
      {
        path:"/goods/edit",
        element:withLoadingComponent(<GoodsEdit></GoodsEdit>)
      }
    ]
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  //访问其他路径时候直接跳转到首页
  // {
  //   path:"*",
  //   element:<Navigate to="/index"></Navigate>
  // }
]

export default routes
