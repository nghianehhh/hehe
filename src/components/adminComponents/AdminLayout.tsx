import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Spin, Image, Tooltip } from "antd";
import React, { ReactNode, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Link } from "react-router-dom";
import sidebarMenu from "../../constants/sidebarMenu";
const { Header, Content, Sider } = Layout;

interface IProps {
  children?: ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  error?: string;
}

const AdminLayout = (props: IProps): JSX.Element => {
  const { children, isLoading = false } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuLogout = [
    {
      key: "1",
      label: (
        <a
        //   onClick={logout}
        >
          Sign out
        </a>
      ),
    },
  ];

  return (
    <Spin size="large" spinning={isLoading}>
      <Layout className="min-h-screen">
        <Header className="bg-primary-40 h-12 flex items-center justify-between fixed z-10 w-full">
          <div
          // width={100}
          // src={logo}
          // alt="logo"
          // preview={false}
          // onClick={() => navigate("/")}
          />
          <div className="flex items-center justify-end">
            <Dropdown menu={{ items: menuLogout }} placement="bottomRight">
              <p style={{ color: "#fff" }}>
                Xin chào:
                {/* <b>{getLocalUserData().email}</b> */}
              </p>
            </Dropdown>
          </div>
        </Header>

        <Layout className="bg-white">
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme="light"
            className="overflow-auto h-screen fixed l-0 mt-14"
          >
            <Menu
              mode="inline"
              theme="light"
              defaultSelectedKeys={[location.pathname]}
              items={renderSideBar()}
            />
            <Button
              onClick={toggleCollapsed}
              className="absolute bottom-0 w-full drop-shadow-sidebar-button"
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
            </Button>
          </Sider>
          <Layout style={{ marginTop: 50 }}>
            <Content id="main" className="px-9 py-8 m-0">
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Spin>
  );
};

const mapMenuItem = (item: any) => {
  const iconElement = item.icon ? React.createElement(item.icon) : undefined;
  if (item.submenu) {
    return {
      key: item.key,
      icon: iconElement,
      label: (
        // <Tooltip placement="right" title={item.title}>
        <span>{item.title}</span>
        // </Tooltip>
      ),
      children: item.submenu.map((submenu: any) => ({
        key: submenu.key,
        label: (
          //   <Tooltip placement="right" title={submenu.title}>
          <Link to={submenu.key}>{submenu.title}</Link>
          //   </Tooltip>
        ),
      })),
    };
  } else {
    return {
      key: item.key,
      icon: iconElement,
      label: (
        // <Tooltip placement="right" title={item.title}>
        <span>
          {item.title}
          <Link to={item.key} />
        </span>
        // </Tooltip>
      ),
    };
  }
};

const renderSideBar = () => {
  return sidebarMenu.map((item: any) => mapMenuItem(item));
};

export default AdminLayout;
