import { GET_GAMES, GET_GAMES_SUCCESS, GET_GAMES_FAILURE } from '../slices/get_games_slice';

const initialState = {
  loading: false,
  errors: [],
  games: [],
};

function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return { ...state, loading: true };
    case GET_GAMES_SUCCESS:
      return { ...state, loading: false, games: action.payload.games };
    case GET_GAMES_FAILURE:
      return { ...state, loading: false, errors: [...state.errors, ...action.payload.error] };
    default:
      return state;
  }
}

export default gamesReducer;
