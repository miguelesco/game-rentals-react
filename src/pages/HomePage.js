import React from 'react';
import CarouselContainer from '../components/CarouselContainer';
import SideBar from '../components/SideBar';
import style from '../assets/components_styles/homepage.module.css';

const HomePage = () => (
  <div className={style.homePage}>
    <SideBar />
    <CarouselContainer />
  </div>
);

export default HomePage;
