export const CREATE_RESERVATION = 'GAMES_RENTAL/SLICES/CREATE_RESERVATION';
export const CREATE_RESERVATION_SUCCESS = 'GAMES_RENTAL/SLICES/CREATE_RESERVATION_SUCCESS';
export const CREATE_RESERVATION_FAILURE = 'GAMES_RENTAL/SLICES/CREATE_RESERVATION_FAILURE';

const createReservation = async (info) => {
  try {
    const response = await fetch('http://localhost:4000/api/reservation/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        retrieval_date: info.retrieval_date,
        reservation_date: info.reservation_date,
        location: info.location,
        game_id: info.game_id,
        buyer_id: info.buyer_id,
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

const dispatchCreateReservation = async (dispatch, info) => {
  dispatch({ type: CREATE_RESERVATION });
  const data = await createReservation(info);
  if (data.error) {
    dispatch({ type: CREATE_RESERVATION_FAILURE, payload: data });
    return data;
  }
  dispatch({ type: CREATE_RESERVATION_SUCCESS, payload: data });
  return data;
};

export default dispatchCreateReservation;
