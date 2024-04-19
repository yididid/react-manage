// import {UpCircleOutlined} from "@ant-design/icons"
//antd 5.5以上不需要引用antd.css
import router from "./router"
import {useRoutes,Link} from "react-router-dom"

//antd、中文版
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale/zh_CN';

function App() {

  const outlet =   useRoutes(router)


  return (
    <>
      <ConfigProvider locale={zh_CN}>
        {outlet}
      </ConfigProvider>
    </>
  )
}

export default App
