import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Menu} from 'antd';
import {useNavigate ,useLocation} from "react-router-dom"
import type { MenuProps } from 'antd';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('dsfsdf', '/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('User', 'page3', <UserOutlined />, [
    getItem('Tom', '/page3/page301'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];


const Comp: React.FC = () => {
  const navigateTo = useNavigate();
  const currentRouter =  useLocation();
  console.log("currentRouter")
  console.log(currentRouter)
  const menuClick = (e:{key:string})=>{
    console.log(e.key)
    //在js里面跳转到对应的路由  编程式导航跳转，利用到一个hook
    navigateTo(e.key);
  }
  const [stateOpenKeys, setStateOpenKeys] = useState(['']);//默认二级导航栏不展开
  const handleonOpenChange =(keys:string[])=>{
    //展开和回收的事件
    setStateOpenKeys([keys[keys.length-1]])
  }

  return(
    <Menu 
      theme="dark" 
      defaultSelectedKeys={[currentRouter.pathname]} 
      mode="inline" 
      items={items} 
      onClick={menuClick} 
      onOpenChange={handleonOpenChange}
      openKeys={stateOpenKeys}
      />
  )
}

export default Comp;