import React, { useState, useEffect } from 'react';
import {
  CDBSidebar, CDBSidebarContent, CDBSidebarHeader,
  CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter,
  CDBBtn as Button,
} from 'cdbreact';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import PropTypes from 'prop-types';
import style from '../assets/components_styles/sidebar.styles';

const actives = {
  home: false,
  reservations: false,
};

const SetActive = (item) => {
  const activeStyle = {
    backgroundColor: '#98bf11',
    color: '#333',
  };
  actives[item] = true;
  return actives[item] ? activeStyle : undefined;
};

const SideBar = (props) => {
  const { width } = props;
  const [hideSideBarContent, setHideSideBarContent] = useState(false);
  useEffect(() => {
    if (width < 720) {
      setHideSideBarContent(width < 720);
    }
  }, [width]);

  const hamburgerClick = () => {
    setHideSideBarContent(!hideSideBarContent);
  };
  return (

    <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#333" backgroundColor="#fff">
        <CDBSidebarHeader prefix={(
          <Button
            style={style}
            className="fa fa-bars fa-large border-none bg-transparent shadow-none"
            onClick={hamburgerClick}
          />
  )}
        >
          <Link to="/home">Yorus Store</Link>
        </CDBSidebarHeader>
        <CDBSidebarContent className={hideSideBarContent && width < 720 ? 'd-none' : undefined}>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="columns" active className={SetActive('home')}>
              <NavLink exact="true" to="/home" style={({ isActive }) => (isActive ? SetActive('home') : undefined)}>
                Juegos
              </NavLink>
            </CDBSidebarMenuItem>
            <NavLink exact="true" to="/" className="activeClicked">
              <CDBSidebarMenuItem icon="columns">
                Reservations
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }} className={hideSideBarContent && width < 720 ? 'd-none' : undefined}>
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
  width: PropTypes.number.isRequired,
};

export default SideBar;
