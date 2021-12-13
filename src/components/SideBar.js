import React from 'react';
// import PropTypes from 'prop-types';

const SideBar = () => (
  <div className="sidebar">
    <div className="sidebar__header">
      <div className="sidebar__header__logo">
        <img src="https://res.cloudinary.com/dzq0gqbqy/image/upload/v1555122400/logo_wvxqjq.png" alt="logo" />
      </div>
      <div className="sidebar__header__title">
        <h1>
          <span>
            <i className="fas fa-user-circle" />
          </span>
          <span>
            <i className="fas fa-user-circle" />
          </span>
          <span>
            <i className="fas fa-user-circle" />
          </span>
        </h1>
      </div>
    </div>
    <div className="sidebar__body">
      <div className="sidebar__body__nav">
        <ul>
          <li>
            <a href="/">
              <i className="fas fa-home" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fas fa-user" />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fas fa-cog" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default SideBar;
