/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import style from './assets/components_styles/layout.module.css';
import SideBar from './components/SideBar';

const Layout = () => {
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
      if (width < 720) {
        setSidebarOpenMobile(!sidebarOpenMobile);
      }
    });
  }, []);

  return (
    <div className="d-flex position-relative">
      <div className={`${style.sidebar} ${sidebarOpenMobile && width < 720 ? 'd-grid h-100' : ''}`}>
        <SideBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
