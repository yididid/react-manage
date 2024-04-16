import React, { useState } from 'react';

import { Breadcrumb, Layout, theme } from 'antd';
import {Outlet} from "react-router-dom"

import MainMenu from "@/components/layout/MainMenu"

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/*侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <MainMenu></MainMenu>
      </Sider>
      {/*右边内容 */}
      <Layout>
        {/*右边头部 */}
        <Header style={{ padding: 0, background: colorBgContainer,paddingLeft:'16px'}}>
          {/*面包屑 */}
          <Breadcrumb style={{ lineHeight: '64px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/*右边内容部分-白色底盒子 */}
        <Content style={{ margin: '16px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: '100%',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/*窗口部分 */}
              <Outlet></Outlet>
          </div>
        </Content>
        {/*右边底部 */}
        <Footer style={{ textAlign: 'center',padding:0,lineHeight:'48px'}}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default View;