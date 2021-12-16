/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Navigate } from 'react-router';
import style from '../../assets/components_styles/reservation_page.module.css';

const LogOutButton = () => {
  const [loggedOut, setLoggetOut] = useState(false);

  const handleClick = () => {
    localStorage.removeItem('userInfo');
    setLoggetOut(true);
  };

  return (
    <div>
      <button type="button" className={`${style.logoutBtn}`} onClick={() => { handleClick(); }}>
        LOGOUT
      </button>
      { loggedOut && <Navigate to="/" />}
    </div>
  );
};

export default LogOutButton;
