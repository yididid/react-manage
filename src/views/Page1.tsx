import { Button } from "antd"
import {useSelector,useDispatch} from "react-redux"
import { changenumAction } from '@/store/modules/NumStatus'
const Page1=()=>{
  const dispatch = useDispatch();//调用react-redux的reducers里面方法
  const{num}=useSelector((state:RootState)=>({
    num:state.NumStatus.num
  }))

  const changeNum=()=>{
    dispatch(()=>{
      console.log("ddddddddd")
    })
    dispatch(changenumAction(1))
  }

  return (
    <div className="APP">
      组件Page1
      <p>-------{num}</p>
      <Button onClick={changeNum}>按钮</Button>
    </div>
  )
}

export default Page1