import React from 'react';
import { useDispatch } from 'react-redux';
import dispatchCreateUser from '../store/slices/create_user_slice';
import dispatchGetUser from '../store/slices/get_user_slice';

const TestComponent = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="submit" onClick={() => { dispatchCreateUser(dispatch, 'Miguelitosanches'); }}>create</button>
      <button type="submit" onClick={() => { dispatchGetUser(dispatch, 'Miguelitosanches'); }}>retrieve</button>
    </div>
  );
};

export default TestComponent;
