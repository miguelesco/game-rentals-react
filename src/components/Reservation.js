import React from 'react';
import PropTypes from 'prop-types';
import style from '../assets/components_styles/reservations_page.module.css';

const Reservation = ({
  gameName, dateReservation, dateRetrieval, city,
}) => (
  <div className={`${style.reservation} p-4 col-12 col-sm-6 col-md-4 col-xl-3 text-center`}>
    <p className={style.name}>{gameName}</p>
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

Reservation.propTypes = {
  gameName: PropTypes.string.isRequired,
  dateReservation: PropTypes.string.isRequired,
  dateRetrieval: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default Reservation;
