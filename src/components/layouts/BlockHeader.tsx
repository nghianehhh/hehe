import { Button, Drawer, Image, Layout, Menu } from "antd";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// import headerMenu from 'constants/menu';
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";

const BlockHeader = (): React.ReactElement => {
  const { Header } = Layout;
  const navigate = useNavigate();

  // const menuItems = useMemo(() => headerMenu, []);

  return (
    <>
      <Header
        style={{
          background: "#EE4D2D",
          zIndex: 40,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        }}
        className="flex items-center justify-between sticky top-0 w-full px-2 md:px-4 bg-white"
      >
        <div className="flex max-w-screen-xl md:order-2">
          <Button
            id="navbar-icon"
            type="text"
            className="inline-flex items-center pr-2 w-11 lg:hidden md:hidden"
            icon={<MenuOutlined />}
            // onClick={showDrawer}
          />
          <Button id="search-icon" type="text" icon={<SearchOutlined />} />
        </div>
        <div className="container max-w-screen-xl md:px-16 2xl:px-8 mx-auto flex items-center justify-between"></div>
      </Header>

      {/* <Drawer
        title="Menu"
        placement="top"
        onClose={closeDrawer}
        open={drawerVisible}
        className="lg:hidden"
      >
        <Menu mode="inline" items={menuItems} onClick={handleMenuClick} />
      </Drawer> */}
    </>
  );
};

export default React.memo(BlockHeader);
