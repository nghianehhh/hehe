/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import HomePage from "../modules/Home/HomePage";
import ShopPage from "../modules/Shop/ShopPage";
// import RemunerationPolicyPage from 'pages/introduce/RemunerationPolicyPage';
// import ResultSearchPage from 'pages/applyResult/ResultSearchPage';
// import RecruitProcessPage from 'pages/job/RecruitProcessPage';
// import ContactPage from 'pages/contact/ContactPage';
// import BlogListPage from 'pages/blog/BlogListPage';
// import BlogDetailPage from 'pages/blog/BlogDetailPage';
// import useScrollToTop from 'hooks/useScrollToTop';
// const HomePage = lazy(() => import('pages/home/HomePage'));
// const JobListPage = lazy(() => import('pages/job/JobListPage'));
// const JobDetailPage = lazy(() => import('pages/job/JobDetailPage'));
// const CandidateApplyPage = lazy(() => import('pages/apply/CandidateApplyPage'));
// const AboutEcoPage = lazy(() => import('pages/introduce/AboutEcoPage'));
// const AboutEplusPage = lazy(() => import('pages/introduce/AboutEplusPage'));

const RoutesCustom = (): JSX.Element => {
  // useScrollToTop();

  return (
    <Suspense fallback={<Spin fullscreen />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-detail" element={<ShopPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesCustom;
