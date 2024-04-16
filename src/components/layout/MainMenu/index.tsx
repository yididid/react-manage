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
  getItem('首页', '/index', <PieChartOutlined />),
  getItem('店铺', '/store', <DesktopOutlined />),
  getItem('商品', 'goods', <UserOutlined />, [
    getItem('平台商品', '/goods/list'),
    getItem('平台添加', '/goods/add'),
    getItem('平台商品', '/goods/page301'),
    getItem('平台品牌', '48'),
    getItem('自营商品', '55'),
    getItem('自营品牌', '56'),
    getItem('标配商品', '57'),
  ]),
  getItem('订单', 'page4', <UserOutlined />, [
    getItem('采购单', '/page3/page301'),
    getItem('客户订单', '4'),
    getItem('订单列表', '50'),
    getItem('售后列表', '53'),
  ]),
  getItem('财务', 'page5', <UserOutlined />, [
    getItem('结算单列表', '/page3/page301'),
    getItem('我的钱包', '40'),
    getItem('支付密码设置', '52'),
  ]),
  getItem('会员', 'page6', <UserOutlined />, [
    getItem('邀请会员', '/page3/page301'),
    getItem('邀请用户列表', '41'),
  ]),
  getItem('数据', 'page7', <UserOutlined />, [
    getItem('销售统计', '/page3/page301'),
    getItem('售后统计', '42'),
    getItem('商品统计', '43'),
    getItem('操作日记', '44'),
  ]),
  getItem('广告管理', 'page8', <UserOutlined />, [
    getItem('广告位列表', '/page3/page301'),
    getItem('广告列表', '422'),
  ]),
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