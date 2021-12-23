import React, { useState, useEffect } from 'react';
import {
  CDBCard, CDBBtn, CDBCardBody, CDBContainer,
} from 'cdbreact';
import { useDispatch } from 'react-redux';
import gamePhoto from '../assets/images/game_image.png';
import dispatchDeleteGame from '../store/slices/delete_game_slice';
import dispatchGetUser from '../store/slices/get_user_slice';
import style from '../assets/components_styles/game_list.module.css';
import modal from '../assets/components_styles/add_game.module.css';

const GamesList = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
  const [message, setMessage] = useState('');
  const [games, setGames] = useState([]);
  useEffect(() => {
    if (userInfo?.games.length > 0) {
      setGames(userInfo.games);
    }
  }, []);

  const deleteGame = async (gameId) => {
    const data = await dispatchDeleteGame(dispatch, gameId);
    if (!data.error) {
      const user = await dispatchGetUser(dispatch, userInfo.username);
      setUserInfo(user);
      setMessage('Game deleted successfully!');
    } else {
      setMessage('Error deleting game');
    }
  };

  const confirm = () => {
    setMessage('');
  };

  return (
    <section className={`position-relative ${style.game_list}`}>
      <div className={`${message === '' ? 'd-none' : 'd-block'} ${modal.modal_outside}`}>
        <div className={`position-absolute ${modal.modal_inner}`}>
          <p className={`${modal.message}`}>{message}</p>
          <button className={`${modal.confirm}`} type="button" onClick={() => { confirm(); }}>Confirm</button>
        </div>
      </div>
      <div className={modal.padding}>
        <h1 className={style.title}>MY GAMES</h1>
        <CDBContainer className={style.container}>
          {
            games.map((game) => (
              <CDBCard
                key={game.id}
                className={`${style.card} border-0`}
              >
                <img className="card-img-top" src={gamePhoto} alt="game" />
                <CDBCardBody className={style.card_body}>
                  <h1 style={{ color: '#333333' }} className="font-weight-normal">{game.name}</h1>
                  <p style={{ color: '#333333', fontSize: '0.9rem' }} className="font-weight-lighter">{game.category}</p>
                  <p style={{ color: '#333333' }} className="font-weight-light">{game.description}</p>
                  <CDBBtn color="dark" block onClick={() => deleteGame(game.id)}>
                    Delete Game
                  </CDBBtn>
                </CDBCardBody>
              </CDBCard>
            ))
          }
        </CDBContainer>
      </div>
    </section>
  );
};

export default GamesList;
