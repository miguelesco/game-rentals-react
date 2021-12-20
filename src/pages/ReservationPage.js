/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import dispatchCreateReservation from '../store/slices/create_reservation_slice';
import dispatchGetUser from '../store/slices/get_user_slice';
import style from '../assets/components_styles/reservation_page.module.css';
import SelectGame from '../components/util/SelectGame';

const ReservationPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let gameId = 1;
  if (id) { gameId = parseInt(id, 10); }
  const [error, setError] = useState(null);
  const [created, setCreated] = useState(false);
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
  const [info, setInfo] = useState({
    retrieval_date: '',
    reservation_date: '',
    location: '',
    game_id: gameId,
    buyer_id: null,
  });
  const user = JSON.parse(localStorage.getItem('userInfo'));
  useEffect(() => {
    setInfo({
      ...info,
      buyer_id: user.id,
    });
  }, []);
  const handleChange = (e, type) => {
    switch (type) {
      case 'reservation_date':
        return setInfo({
          ...info,
          reservation_date: e.target.value,
        });
      case 'retrieval_date':
        if (e.target.value <= info.reservation_date) {
          return setError('Retrieval date cannot be before reservation date');
        }
        setInfo({
          ...info,
          retrieval_date: e.target.value,
        });
        return setError(null);
      case 'location':
        return setInfo({
          ...info,
          location: e.target.value,
        });
      case 'game':
        return setInfo({
          ...info,
          game_id: e.target.value,
        });
      default:
        return info;
    }
  };
  const handleSubmit = async (info) => {
    const data = await dispatchCreateReservation(dispatch, info);
    if (!data.error) {
      const user = await dispatchGetUser(dispatch, userInfo.username);
      setUserInfo(user);
      setCreated(true);
    }
  };

  return (
    <section className={`${style.section} d-flex flex-column justify-content-center align-items-center`}>
      <h1 className="logo">Yoru&apos;s</h1>
      <h1 className={`${style.title}`}>Reserve a Game, Have Fun</h1>
      <p className={`${style.sub_title}`}>When reserving a game please pay attention to the date and the location</p>
      <div className={`${style.inner_div} d-flex flex-column justify-content-center align-items-center`}>
        <div className={`${style.dates_div} d-flex flex-column flex-lg-row justify-content-around align-items-center`}>
          <div className={`${style.reservation} justify-content-center align-items-center`}>
            <p>Start</p>
            <input type="date" className={`${style.input}`} value={info.reservation_date} onChange={(e) => { handleChange(e, 'reservation_date'); }} />
          </div>
          <div className={`${style.retrieval} justify-content-center align-items-center`}>
            {error && <p>{error}</p>}
            <p>End</p>
            <input type="date" className={`${style.input}`} value={info.retrieval_date} onChange={(e) => { handleChange(e, 'retrieval_date'); }} />
          </div>
        </div>
        <div className={`${style.location} d-flex flex-column align-items-center`}>
          <p>Location</p>
          <input type="text" className={`${style.input}`} value={info.location} onChange={(e) => { handleChange(e, 'location'); }} />
        </div>
        { !id && (
          <div className={`${style.game} d-flex flex-column align-items-center`}>
            <p>Select the Game</p>
            <SelectGame handleChange={handleChange} />
          </div>
        )}
        <div>
          <button type="submit" className={`${style.submit}`} onClick={() => { handleSubmit(info); }}>Reserve</button>
        </div>
      </div>
      { created && <Navigate to="/reservations/" />}
    </section>
  );
};

export default ReservationPage;
