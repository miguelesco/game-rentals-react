/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import style from '../../assets/components_styles/reservation_page.module.css';

const SelectGame = ({ handleChange }) => {
  const games = useSelector((state) => state.games.games);
  return (
    <select name="game" id="game" className={`${style.select} ${style.input}`} onChange={(e) => { handleChange(e, 'game'); }}>
      {
        games.map((e) => (
          <option key={e.id} value={e.id} className={`${style.option} ${style.input}`}>
            {e.name}
          </option>
        ))
      }
    </select>
  );
};

export default SelectGame;
