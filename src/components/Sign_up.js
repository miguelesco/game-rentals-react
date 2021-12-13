import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import dispatchCreateUser from '../store/slices/create_user_slice';

const SignUp = () => {
  const [username, setUserName] = useState('');
  const [logged, setLogged] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (name) => {
    const data = await dispatchCreateUser(dispatch, name);
    console.log(data);
    if (data.user) {
      setLogged(true);
    }
  };

  return (
    <section>
      <input type="text" value={username} onChange={(e) => { handleChange(e); }} />
      <button type="submit" onClick={() => { handleSubmit(username); }}>Create User</button>
      { logged && <Navigate to="/" />}
    </section>
  );
};

export default SignUp;
