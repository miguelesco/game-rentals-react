import React, { useState } from 'react';
import {
  CDBCard, CDBBtn, CDBCardBody, CDBContainer,
} from 'cdbreact';
import { useSelector } from 'react-redux';

import style from '../assets/components_styles/game_list.module.css';

const GamesList = () => {
  const state = useSelector((state) => state.games);
  const [games] = useState(state.games);
  return (
    <section className={style.game_list}>
      <CDBContainer className={style.container}>
        {
          games.map((game) => (
            <CDBCard
              key={game.id}
              style={{
                position: 'relative', width: '25rem', height: '33rem', backgroundImage: "url('img/rectangle.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
              }}
            >
              <CDBCardBody style={{
                backgroundColor: 'white', width: 'calc(100% - 50px)', textAlign: 'left', align: 'center', position: 'absolute', bottom: 0,
              }}
              >
                <h1 style={{ color: '#333333' }} className="font-weight-normal">{game.name}</h1>
                <p style={{ color: '#333333', fontSize: '0.9rem' }} className="font-weight-lighter">{game.category}</p>
                <p style={{ color: '#333333' }} className="font-weight-light">{game.description}</p>
                <CDBBtn color="dark" block>
                  Send Message
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
