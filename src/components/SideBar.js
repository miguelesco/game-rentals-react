import React, { useState, useEffect } from 'react';
import {
  CDBSidebar, CDBSidebarContent, CDBSidebarHeader,
  CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter,
  CDBBtn as Button,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import PropTypes from 'prop-types';
import style from '../assets/components_styles/sidebar.styles';
import styleModule from '../assets/components_styles/sidebar.module.css';
import Logout from './util/logout';

const SideBar = (props) => {
  const { sidebarMobile, width } = props;
  const [hideSideBarContent, setHideSideBarContent] = useState(false);
  const page = localStorage.getItem('activePage') || 'home';
  const setPage = (param) => {
    localStorage.setItem('activePage', param);
  };
  const SetActiveStyle = (e) => {
    setTimeout(() => {
      const links = document.getElementsByClassName(styleModule.active);
      for (let i = 0; i < links.length; i += 1) {
        links[i].classList.remove(styleModule.active);
      }
      const targetParent = e.parentNode.parentNode;
      if (e.classList.contains('active')) {
        targetParent.classList.add(styleModule.active);
        e.classList.add(styleModule.active_link);
        setPage(e.id);
      }
    }, 10);
  };

  useEffect(() => {
    if (width < 720) {
      setHideSideBarContent(width < 720);
    }
    const activeLink = document.getElementById(page);
    SetActiveStyle(activeLink);
  }, [width]);

  const hamburgerClick = () => {
    setHideSideBarContent(!hideSideBarContent);
    sidebarMobile(hideSideBarContent);
  };
  return (

    <div style={{
      display: 'flex', height: '100vh', overflow: 'hidden', position: 'absolute',
    }}
    >
      <CDBSidebar textColor="#333" backgroundColor={!hideSideBarContent ? '#FFF' : 'transparent'}>
        <CDBSidebarHeader
          prefix={(
            <Button
              style={style}
              className="fa fa-bars fa-large border-none bg-transparent shadow-none"
              onClick={hamburgerClick}
            />
        )}
          backgroundColor="#333"
        />
        <h1 className={`side_bar_logo ${hideSideBarContent ? 'd-none' : undefined}`}>Yoru&apos;s</h1>
        <CDBSidebarContent className={hideSideBarContent ? 'd-none' : undefined}>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="" className={styleModule.link_div}>
              <NavLink id="home" className={`ms-1 ${styleModule.link}`} exact="true" to="/home" onClick={(e) => { SetActiveStyle(e.target); }}>
                HOME
              </NavLink>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="" className={styleModule.link_div}>
              <NavLink id="my_reservations" className={`ms-1 ${styleModule.link}`} exact="true" to="/reservations" onClick={(e) => { SetActiveStyle(e.target); }}>
                MY RESERVATIONS
              </NavLink>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="" className={styleModule.link_div}>
              <NavLink id="new_reservations" className={`ms-1 ${styleModule.link}`} exact="true" to="/reservation/new" onClick={(e) => { SetActiveStyle(e.target); }}>
                NEW RESERVATION
              </NavLink>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="" className={styleModule.link_div}>
              <NavLink id="games" className={`ms-1 ${styleModule.link}`} to="/games" onClick={(e) => { SetActiveStyle(e.target); }}>
                MY GAMES
              </NavLink>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="" className={styleModule.link_div}>
              <NavLink id="new_game" className={`ms-1 ${styleModule.link}`} exact="true" to="/new_game" onClick={(e) => { SetActiveStyle(e.target); }}>
                NEW GAME
              </NavLink>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="">
              <NavLink className={`ms-1 ${styleModule.link}`} exact="true" to="/games/new">
                <Logout />
              </NavLink>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }} className={hideSideBarContent ? 'd-none' : undefined}>
          <div className="sidebar-btn-wrapper" style={{ padding: '20px 5px' }}>
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            {
              !hideSideBarContent ? <p>© 2021 Yorus Store. All rights reserved.</p>
                : <p>© Yorus Store</p>
            }
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

SideBar.propTypes = {
  sidebarMobile: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

export default SideBar;
