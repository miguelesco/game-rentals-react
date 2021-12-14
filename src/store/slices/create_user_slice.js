export const CREATE_USER = 'GAMES_RENTAL/SLICES/CREATE_USER';
export const CREATE_USER_SUCCESS = 'GAMES_RENTAL/SLICES/CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'GAMES_RENTAL/SLICES/CREATE_USER_FAILURE';

const createUser = async (username) => {
  try {
    const response = await fetch('http://localhost:4000/api/sign_up', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return error.response.data;
  }
};

const dispatchCreateUser = async (dispatch, username) => {
  dispatch({ type: CREATE_USER });
  const data = await createUser(username);
  if (data.error) {
    dispatch({ type: CREATE_USER_FAILURE, payload: data });
    return data;
  }
  dispatch({ type: CREATE_USER_SUCCESS, payload: data });
  return data;
};

export default dispatchCreateUser;
