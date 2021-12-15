/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Outlet } from 'react-router';
import SideBar from './components/SideBar';

const Layout = () => (
  <div className="d-flex position-relative">
    <div className="position-absolute top-0 bottom-0">
      <SideBar />
    </div>
    <Outlet />
  </div>
);

export default Layout;
