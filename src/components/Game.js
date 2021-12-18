import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import gamePhoto from '../assets/images/game_image.png';
import style from '../assets/components_styles/homepage.module.css';

const Game = ({ name, description, id }) => (
  <NavLink className={`${style.game} text-center`} to={`/games/${id}`}>
    <div className={`${style.image_container} mx-auto`}>
      <img src={gamePhoto} alt="game logo" className={style.game_image} />
    </div>
    <h2 className={style.title_game}>{name}</h2>
    <p className={style.text_game}>{description}</p>
  </NavLink>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Game;
