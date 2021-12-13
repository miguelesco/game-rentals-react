import React from 'react';
import PropTypes from 'prop-types';
import gamePhoto from '../assets/images/game_image.png';

const Game = ({ name, description }) => (
  <div className="game text-center">
    <div className="image-container mx-auto">
      <img src={gamePhoto} alt="game logo" className="game-image" />
    </div>
    <h2 className="title-game">{name}</h2>
    <p className="text-game">{description}</p>
  </div>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Game;
