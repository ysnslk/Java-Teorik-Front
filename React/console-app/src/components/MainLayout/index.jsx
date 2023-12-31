import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/user">User</Link>, "user-mi", <UserOutlined />),
  getItem(<Link to="/role">Role</Link>, "role-mi", <DesktopOutlined />),
  getItem(
    <Link to="/permission">Permission</Link>,
    "permission-mi",
    <FileOutlined />
  ),
  getItem(<Link to="/task">Task</Link>, "task-mi", <TeamOutlined />),
  getItem(<Link to="/flow">Flow</Link>, "flow-mi", <PieChartOutlined />),
];
const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [breadCrumb, setBreadCrumb] = useState(<Link to="/user">User</Link>);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onSelect = ({ key }) => {
    items.forEach((item) => {
      if (item.key === key) {
        setBreadCrumb(item.label);
      }
    });
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onSelect={onSelect}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            items={[{ title: breadCrumb }]}
            style={{
              margin: "16px 0",
            }}
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ys Design ©2023 Created by YS
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
