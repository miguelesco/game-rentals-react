import { CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from '../slices/create_user_slice';
import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE } from '../slices/get_user_slice';

const initialState = {
  loading: false,
  errors: [],
  user_information: {
    user: {

    },
    games: [],
    reservations: [],
  },
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, loading: true };
    case CREATE_USER_SUCCESS:
      return { ...state, loading: false, user_information: action.payload };
    case CREATE_USER_FAILURE:
      return { ...state, loading: false, errors: [...state.errors, ...action.payload.error] };
    case GET_USER:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      console.log(action.payload);
      return { ...state, loading: false, user_information: action.payload };
    case GET_USER_FAILURE:
      return { ...state, loading: false, errors: [...state.errors, ...action.payload.error] };
    default:
      return state;
  }
}

export default usersReducer;
