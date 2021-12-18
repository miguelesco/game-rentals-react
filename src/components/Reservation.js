import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import style from '../assets/components_styles/reservations_page.module.css';

const Reservation = ({
  game, dateReservation, dateRetrieval, city,
}) => {
  const Game = useSelector((state) => state.games.games);
  const GameOnly = Game[game].name;

  return (
    <div className={`${style.reservation} p-4 col-12 col-sm-6 col-md-4 col-xl-3 text-center`}>
      <p className={style.name}>{GameOnly}</p>
      <p className={style.date}>
        {' '}
        Date:
        {' '}
        {dateReservation}
      </p>
      <p className={style.date}>
        {' '}
        Date:
        {' '}
        {dateRetrieval}
      </p>
      <p className={style.city}>
        City:
        {' '}
        {city}
      </p>
    </div>
  );
};

Reservation.propTypes = {
  game: PropTypes.number.isRequired,
  dateReservation: PropTypes.string.isRequired,
  dateRetrieval: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default Reservation;
