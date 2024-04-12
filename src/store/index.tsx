//1.引入configureStore
import {configureStore} from '@reduxjs/toolkit'
//2.引入刚声明的createSclice
import NumStatus from "./modules/NumStatus"
import XxxStatus from "./modules/XxxStatus"
//3.注册刚刚引入的createSclice
export default configureStore({
    reducer:{
      NumStatus,
      XxxStatus
    }
})
