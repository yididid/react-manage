import {useEffect} from "react"
import styles from './login.module.scss'
import { Input,Space,Button,message } from 'antd';
const view=()=>{
  //加载完组件之后
  useEffect(()=>{
    
  },[]);
  return(
    <div className={styles.loginPage}>
      {/* 登录盒子 */}
      <div className={styles.loginBox+ " loginbox"}>
          {/* 标题部分 */}
          <div className={styles.title}>
              <h1>管理总后台</h1>
              <p>quan5.com</p>
          </div>
          {/* 表单部分 */}
          <div className="form">
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
              <Input placeholder="用户名"/>
              <Input.Password placeholder="密码"/>
              {/* 验证码盒子 */}
              <div className="captchaBox">
                <Input placeholder="验证码"/>
                <div className="captchaImg">
                  <img height="38"  alt="" />
                </div>
              </div>
              <Button type="primary" className={styles.loginBtn} block >登录</Button>
            </Space>
          </div>
      </div>
    </div>
  )
}

export default view