export const GET_GAMES = 'GAMES_RENTAL/SLICES/GET_GAMES';
export const GET_GAMES_SUCCESS = 'GAMES_RENTAL/SLICES/GET_GAMES_SUCCESS';
export const GET_GAMES_FAILURE = 'GAMES_RENTAL/SLICES/GET_GAMES_FAILURE';

const getGames = async () => {
  try {
    const response = await fetch('https://ancient-hollows-68035.herokuapp.com/api/games');
    const data = await response.json();
    return data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return error.response.data;
  }
};

const dispatchGetGames = async (dispatch) => {
  dispatch({ type: GET_GAMES });
  const data = await getGames();
  if (data.error) {
    dispatch({ type: GET_GAMES_FAILURE, payload: data });
    return data;
  }
  dispatch({ type: GET_GAMES_SUCCESS, payload: data });
  return data;
};

export default dispatchGetGames;
