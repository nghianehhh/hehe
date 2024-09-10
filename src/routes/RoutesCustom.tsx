import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import HomePage from "../modules/Home/HomePage";
import ShopPage from "../modules/Shop/ShopPage";
import AdminPage from "../modules/Admin/AdminPage";
import DashboardPage from "../modules/Admin/DashboardPage";

const RoutesCustom = (): JSX.Element => {
  // useScrollToTop();

  return (
    <Suspense fallback={<Spin fullscreen />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-detail" element={<ShopPage />} />

        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/report/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesCustom;
