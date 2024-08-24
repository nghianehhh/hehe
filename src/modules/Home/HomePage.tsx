import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
// import { MainLayout } from "components";
import { Col, Image, Row, Spin, Statistic, Typography } from "antd";
import MainLayout from "../../components/MainLayout";
import {
  CheckCircleOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  TagOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <p>Home page test</p>
    </MainLayout>
  );
};

export default HomePage;
