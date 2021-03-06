import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import dispatchCreateUser from '../store/slices/create_user_slice';
import style from '../assets/components_styles/sign_up_in.module.css';

const SignUp = () => {
  const [username, setUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = async (name) => {
    const data = await dispatchCreateUser(dispatch, name);
    if (data.username) {
      navigate('/home');
    }
  };

  return (
    <section className={`${style.section} d-flex flex-column align-items-center`}>
      <div>
        <h1 className="logo">Yoru&apos;s</h1>
      </div>
      <div className={`${style.form} d-flex flex-column justify-content-around align-items-center`}>
        <div>
          <p className={style.title}>Sign Up</p>
        </div>
        <div>
          <input
            className={`${style.input}`}
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => { handleChange(e); }}
          />
        </div>
        <div>
          <button className={`${style.submit}`} type="submit" onClick={() => { handleSubmit(username); }}>Create User</button>
        </div>
        <NavLink to="/sign_in"> Logging </NavLink>
      </div>
    </section>
  );
};

export default SignUp;
