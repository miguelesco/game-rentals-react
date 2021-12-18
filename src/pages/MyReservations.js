import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Reservation from '../components/Reservation';
import style from '../assets/components_styles/reservations_page.module.css';

const MyReservations = () => {
  const state = useSelector((state) => state.user.user_information.reservations);
  const [myReservations, setMyReservations] = useState([]);
  useEffect(() => {
    console.log(state);
    setMyReservations(state);
  }, [state]);

  return (
    <div className={style.reservation_page}>
      <div className="container">
        <div className="row">
          {
          myReservations.map((reservation) => (
            <Reservation
              key={reservation.id}
              game={reservation.game_id}
              dateReservation={reservation.reservation_date}
              dateRetrieval={reservation.retrieval_date}
              city={reservation.location}
            />
          ))
      }
        </div>
      </div>
    </div>
  );
};
export default MyReservations;
