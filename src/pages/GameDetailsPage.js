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
  const game = state.games[id - 1];
  return (
    <section className={`${style.section} d-flex flex-column justify-content-center align-items-center`}>
      { !game && (
        <div>
          Loading
        </div>
      )}
      { game && (
        <div className={`${style.content_div} d-flex flex-column justify-content-center align-items-center flex-lg-row`}>
          <div>
            <img className={`${style.image}`} src={image} alt="game case" />
          </div>
          <div className={`${style.content_inner_div} text-lg-end`}>
            <p className={`${style.title}`}>{game.name}</p>
            <p className={style.category}>
              <span>Game category:</span>
              {game.category}
            </p>
            <p className={`${style.price}`}>
              <span className={style.week}>Price per week:</span>
              <span>$</span>
              {game.price}
            </p>
            <p className={`${style.price}`}>
              <span className={style.week}>Game price on store:</span>
              <span>$</span>
              {game.price * 20}
            </p>
            <p className={`${style.description}`}>{game.description}</p>
            <Link className={style.reserve} to={`/reserve/${id}`}>Reserve this game</Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default GameDetails;
