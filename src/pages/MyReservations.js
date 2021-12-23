import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Reservation from '../components/Reservation';
import style from '../assets/components_styles/reservations_page.module.css';

const MyReservations = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const state = useSelector((state) => state.games);
  const [myReservations, setMyReservations] = useState([]);
  const [games, setGames] = useState([]);
  useEffect(() => {
    if (state.games.length > 0) {
      setMyReservations(user.reservations);
      setGames(state.games);
    }
  }, [state]);
  return (
    <div>
      <div className={style.reservation_page}>
        <div className="container">
          <div className="row">
            { myReservations.length > 0 ? (
              myReservations.map((reservation) => (
                <Reservation
                  key={reservation.id}
                  gameName={games[reservation.game_id - 1]?.name}
                  dateReservation={reservation.reservation_date}
                  dateRetrieval={reservation.retrieval_date}
                  city={reservation.location}
                />
              ))
            ) : (
              <p>No reservations</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyReservations;
