/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import style from '../assets/components_styles/game_details_page.module.css';
import image from '../assets/images/game_image.png';

const GameDetails = () => {
  const { id } = useParams();
  const state = useSelector((state) => state.games);
  const { games } = state;
  const game = [];
  for (let i = 0; i < games.length; i += 1) {
    if (games[i].id === parseInt(id, 10)) {
      game.push(games[i]);
    }
  }
  return (
    <section className={`${style.section} d-flex flex-column justify-content-center align-items-center`}>
      { !game[0] && (
        <div>
          Loading
        </div>
      )}
      { game[0] && (
        <div className={`${style.content_div} d-flex flex-column justify-content-center align-items-center`}>
          <div className={`${style.content_inner_div} d-flex text-lg-end position-relative`}>
            <div className={`${style.image_div} position-absolute top-0`}>
              <img className={`${style.image}`} src={image} alt="game case" />
            </div>
            <div className={style.gameInfo_div}>
              <p className={`${style.title}`}>{game[0].name}</p>
              <p className={style.category}>
                <span>Game category:</span>
                {game[0].category}
              </p>
              <p className={`${style.price}`}>
                <span className={style.week}>Price per week:</span>
                <span>$</span>
                {game[0].price}
              </p>
              <p className={`${style.price}`}>
                <span className={style.week}>Game price on store:</span>
                <span>$</span>
                {game[0].price * 20}
              </p>
              <p className={`${style.description}`}>{game[0].description}</p>
              <Link className={style.reserve} to={`/games/${id}/reservation`}>Reserve this game</Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GameDetails;
