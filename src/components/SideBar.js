import React from 'react';
import {
  CDBSidebar, CDBSidebarContent, CDBSidebarHeader,
  CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter,
} from 'cdbreact';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
// import PropTypes from 'prop-types';
import '../assets/components_styles/sidebar.module.css';

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

const SideBar = () => (
  <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#333" backgroundColor="#fff">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" />}>
        <Link to="/home">Yorus Store</Link>
      </CDBSidebarHeader>
      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="columns" active className={SetActive('home')}>
            <NavLink exact="true" to="/home" style={({ isActive }) => (isActive ? SetActive('home') : undefined)}>
              Juegos
            </NavLink>
          </CDBSidebarMenuItem>
          <NavLink exact="true" to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">
              Reservations
            </CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact="true" to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">
              Sign Up
            </CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact="true" to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">
              Sign Up
            </CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>
      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div className="sidebar-btn-wrapper" style={{ padding: '20px 5px' }}>
          <FaFacebookF />
          <FaTwitter />
          <FaPinterestP />
          <p>Reserved rights Yorus</p>
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  </div>
);

export default SideBar;
