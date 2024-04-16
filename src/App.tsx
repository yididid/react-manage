// import {UpCircleOutlined} from "@ant-design/icons"
//antd 5.5以上不需要引用antd.css
import router from "./router"
import {useRoutes,Link} from "react-router-dom"

function App() {

  const outlet =   useRoutes(router)


  return (
    <>
      {outlet}
    </>
  )
}

export default App
