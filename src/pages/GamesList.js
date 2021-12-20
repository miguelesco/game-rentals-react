import React, { useState, useEffect } from 'react';
import {
  CDBCard, CDBCardBody, CDBContainer,
} from 'cdbreact';
import { useSelector } from 'react-redux';
import gamePhoto from '../assets/images/game_image.png';
import style from '../assets/components_styles/game_list.module.css';

const GamesList = () => {
  const state = useSelector((state) => state.games);
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const [games, setGames] = useState([]);
  useEffect(() => {
    setGames(state.games.filter((game) => game.owner_id === user.id));
  }, [state]);
  console.log(games, state);
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
              </CDBCardBody>
            </CDBCard>
          ))
        }
      </CDBContainer>
    </section>
  );
};

export default GamesList;
