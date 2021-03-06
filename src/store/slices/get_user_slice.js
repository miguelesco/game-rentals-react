export const GET_USER = 'GAMES_RENTAL/SLICES/GET_USER';
export const GET_USER_SUCCESS = 'GAMES_RENTAL/SLICES/GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GAMES_RENTAL/SLICES/GET_USER_FAILURE';

const getUser = async (username) => {
  try {
    const response = await fetch('https://ancient-hollows-68035.herokuapp.com/api/sign_in', {
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

const saveUser = (userInformation) => {
  const userInfoString = JSON.stringify(userInformation);
  localStorage.setItem('userInfo', userInfoString);
};

const dispatchGetUser = async (dispatch, username) => {
  dispatch({ type: GET_USER });
  const data = await getUser(username);
  if (data.error) {
    dispatch({ type: GET_USER_FAILURE, payload: data });
    return data;
  }
  dispatch({ type: GET_USER_SUCCESS, payload: data });
  saveUser(data);
  return data;
};

export default dispatchGetUser;
