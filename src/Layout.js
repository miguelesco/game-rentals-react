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
    });
  }, []);

  const sidebarMobile = (hide) => {
    if (width < 720) {
      setSidebarOpenMobile(hide);
    }
  };

  return (
    <div className={`${style.sidebar} ${sidebarOpenMobile && width < 720 ? 'd-grid h-100' : ''}`}>
      <div className={style.z}>
        <SideBar width={width} sidebarMobile={sidebarMobile} />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
