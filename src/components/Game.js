import React from 'react';
import PropTypes from 'prop-types';
import gamePhoto from '../assets/images/game_image.png';
import style from '../assets/components_styles/homepage.module.css';

const Game = ({ name, description }) => (
  <div className={`${style.game} text-center`}>
    <div className={`${style.image_container} mx-auto`}>
      <img src={gamePhoto} alt="game logo" className={style.game_image} />
    </div>
    <h2 className={style.title_game}>{name}</h2>
    <p className={style.text_game}>{description}</p>
  </div>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Game;
