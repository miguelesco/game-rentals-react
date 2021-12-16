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
  useEffect(() => {
    if (width < 720) {
      setHideSideBarContent(width < 720);
    }
  }, [width]);

  const SetActiveStyle = (e) => {
    setTimeout(() => {
      const links = document.getElementsByClassName(styleModule.active);
      for (let i = 0; i < links.length; i += 1) {
        links[i].classList.remove(styleModule.active);
      }
      const targetParent = e.target.parentNode.parentNode;
      const { target } = e;
      if (target.classList.contains('active')) {
        targetParent.classList.add(styleModule.active);
        target.classList.add(styleModule.active_link);
      }
    }, 10);
  };

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
              <NavLink className={`ms-1 ${styleModule.link}`} exact="true" to="/home" onClick={(e) => { SetActiveStyle(e); }}>
                HOME
              </NavLink>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="" className={styleModule.link_div}>
              <NavLink className={`ms-1 ${styleModule.link}`} exact="true" to="/reservations" onClick={(e) => { SetActiveStyle(e); }}>
                MY RESERVATIONS
              </NavLink>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="" className={styleModule.link_div}>
              <NavLink className={`ms-1 ${styleModule.link}`} exact="true" to="/reservation/new" onClick={(e) => { SetActiveStyle(e); }}>
                NEW RESERVATION
              </NavLink>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="" className={styleModule.link_div}>
              <NavLink className={`ms-1 ${styleModule.link}`} exact="true" to="/games" onClick={(e) => { SetActiveStyle(e); }}>
                MY GAMES
              </NavLink>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="" className={styleModule.link_div}>
              <NavLink className={`ms-1 ${styleModule.link}`} exact="true" to="/games/new" onClick={(e) => { SetActiveStyle(e); }}>
                NEW GAME
              </NavLink>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="">
              <NavLink className={`ms-1 ${styleModule.link}`} exact="true" to="/games/new" onClick={(e) => { SetActiveStyle(e); }}>
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
