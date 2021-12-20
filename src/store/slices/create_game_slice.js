export const CREATE_GAMES = 'CREATE_GAMES/SLICES/CREATE_GAMES';
export const CREATE_GAMES_SUCCESS = 'CREATE_GAMES/SLICES/GET_GAMES_SUCCESS';
export const CREATE_GAMES_FAILURE = 'CREATE_GAMES/SLICES/GET_GAMES_FAILURE';

const createGame = async (game) => {
  console.log(game);
  try {
    const response = await fetch('https://ancient-hollows-68035.herokuapp.com/api/games/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: game.name,
        icon: game.icon,
        description: game.description,
        price: game.price,
        category: game.category,
        owner_id: game.owner_id,
      }),
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

const dispatchCreateGame = async (dispatch, game) => {
  dispatch({ type: CREATE_GAMES });
  const data = await createGame(game);
  if (data.error) {
    dispatch({ type: CREATE_GAMES_FAILURE, payload: data });
    return data;
  }
  dispatch({ type: CREATE_GAMES_SUCCESS, payload: data });
  return data;
};

export default dispatchCreateGame;
