import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Reservation from '../components/Reservation';
import style from '../assets/components_styles/reservations_page.module.css';

const MyReservations = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const state = useSelector((state) => state.games.games);
  const [myReservations, setMyReservations] = useState([]);
  const [games, setGames] = useState([]);
  useEffect(() => {
    setMyReservations(user.reservations);
    setGames(state);
    console.log(games, 'HOLAAA', state);
  }, [state]);

  return (
    <div className={style.reservation_page}>
      <div className="container">
        <div className="row">
          { myReservations ? (
            myReservations.map((reservation) => (
              <Reservation
                key={reservation.id}
                gameName={games[reservation.game_id - 1].name}
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
  );
};
export default MyReservations;
