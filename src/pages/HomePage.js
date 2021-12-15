import React, { useState, useEffect } from 'react';

import CarouselContainer from '../components/CarouselContainer';

import style from '../assets/components_styles/homepage.module.css';

import SideBar from '../components/SideBar';

const HomePage = () => {
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
    <div className={`${style.homePage} ${sidebarOpenMobile && width < 720 ? 'd-grid h-100' : ''}`}>
      <SideBar sidebarMobile={sidebarMobile} width={width} />
      <CarouselContainer />
    </div>
  );
};

export default HomePage;
