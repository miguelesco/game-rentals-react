import React, { useState, useEffect } from 'react';
import {
  CDBCard, CDBBtn, CDBCardBody, CDBContainer,
} from 'cdbreact';
import { useSelector, useDispatch } from 'react-redux';
import gamePhoto from '../assets/images/game_image.png';
import dispatchDeleteGame from '../store/slices/delete_game_slice';
import style from '../assets/components_styles/game_list.module.css';

const GamesList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.games.games);
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const [games, setGames] = useState([]);
  useEffect(() => {
    if (state.length > 0) {
      setGames(state.filter((game) => game.owner_id === user.id));
    }
  }, [state]);

  const deleteGame = (gameId) => {
    const data = dispatchDeleteGame(dispatch, gameId);
    if (!data.error) {
      window.alert('Game deleted successfully!');
    } else {
      window.alert('Error deleting game');
    }
  };

  return (
    <section className={style.game_list}>
      <h1 className={style.title}>MY GAMES</h1>
      <CDBContainer className={style.container}>
        {
          games.map((game) => (
            <CDBCard
              key={game.id}
              className={[style.card, 'border-0']}
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
    </section>
  );
};

export default GamesList;
