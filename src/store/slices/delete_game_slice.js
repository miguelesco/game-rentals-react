export const DELETE_GAME = 'DELETE_GAME/SLICES/CREATE_GAME';
export const DELETE_GAME_SUCCESS = 'DELETE_GAME/SLICES/DELETE_GAMESUCCESS';
export const DELETE_GAME_FAILURE = 'DELETE_GAME/SLICES/DELETE_GAMEFAILURE';

const deleteGame = async (gameId) => {
  try {
    const response = await fetch(`https://ancient-hollows-68035.herokuapp.com/api/games/${gameId}/delete`, {
      method: 'DELETE',
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

const dispatchDeleteGame = async (dispatch, gameId) => {
  dispatch({ type: DELETE_GAME });
  const data = await deleteGame(gameId);
  if (data.error) {
    dispatch({ type: DELETE_GAME_FAILURE, payload: data });
    return data;
  }
  dispatch({ type: DELETE_GAME_SUCCESS, payload: data });
  return data;
};

export default dispatchDeleteGame;
