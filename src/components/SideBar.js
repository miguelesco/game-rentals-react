import React from 'react';
import {
  CDBSidebar, CDBSidebarContent, CDBSidebarHeader,
  CDBSidebarMenu, CDBSidebarMenuItem, CDBSidebarFooter,
} from 'cdbreact';
// import PropTypes from 'prop-types';

const SideBar = () => (
  <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}>
    <CDBSidebar textColer="#fff" backgroundColor="rgb(37, 90, 122)">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" />} />
      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="columns">
            Transfer
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="columns">
            Transfer
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="columns">
            Transfer
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="columns">
            Transfer
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>
      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div className="sidebar-btn-wrapper" style={{ padding: '20px 5px' }}>
          sidebar footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  </div>
);

export default SideBar;
