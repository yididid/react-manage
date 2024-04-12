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
  getItem('page1', '/page1', <PieChartOutlined />),
  getItem('page2 2', '/page2', <DesktopOutlined />),
  getItem('page3', 'page3', <UserOutlined />, [
    getItem('page301', '/page3/page301'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];


const Comp: React.FC = () => {
  const navigateTo = useNavigate();
  const currentRouter =  useLocation();

  const menuClick = (e:{key:string})=>{
    console.log(e.key)
    //在js里面跳转到对应的路由  编程式导航跳转，利用到一个hook
    navigateTo(e.key);
  }

  //默认是否展开二级导航栏start
  let firstOpenkey:string="";
  function findkey(obj:{key:string}){
    return obj.key===currentRouter.pathname
  }
  for(let i=0;i<items.length;i++){
    //判断找到情况
    if(items[i]!['children']&&items[i]!['children'].length>0 && items[i]!['children'].find(findkey)){
      firstOpenkey = items[i]!.key as string;
      break;
    }
  }
  //默认是否展开二级导航栏end

  const [stateOpenKeys, setStateOpenKeys] = useState([firstOpenkey]);//默认二级导航栏
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