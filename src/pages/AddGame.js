import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import dispatchCreateGame from '../store/slices/create_game_slice';
import dispatchGetUser from '../store/slices/get_user_slice';
import style from '../assets/components_styles/add_game.module.css';

const AddGame = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
  const [created, setCreated] = useState(false);
  const [game, setGame] = useState({
    name: '',
    description: '',
    icon: '',
    price: 0,
    category: '',
    owner_id: userInfo.id,
  });

  const handleInputChange = (event) => {
    setGame({
      ...game,
      [event.target.name]: event.target.value,
    });
  };

  const createGame = async (e) => {
    e.preventDefault();
    const data = await dispatchCreateGame(dispatch, game);
    if (!data.error) {
      const user = await dispatchGetUser(dispatch, userInfo.username);
      setUserInfo(user);
      setCreated(true);
      window.alert('Game created successfully!');
      setGame({
        name: '',
        description: '',
        icon: '',
        price: 0,
        category: '',
        owner_id: user.id,
      });
    } else {
      window.alert('Error creating game');
    }
  };

  return (
    <section id="add-game" className={style.add_game}>
      <h1 className="title">Add a new Game to sell</h1>
      <p>
        In
        <h1 className="logo">Yoru&apos;s</h1>
      </p>
      <form className="column text-center" onSubmit={createGame}>
        <div className="col-md-3">
          <input type="text" placeholder="Title" className="form-control" onChange={handleInputChange} name="name" />
        </div>
        <div className="col-md-3">
          <input type="text" placeholder="Description" className="form-control" onChange={handleInputChange} name="description" />
        </div>
        <div className="col-md-3">
          <input type="number" placeholder="Price" className="form-control" onChange={handleInputChange} name="price" />
        </div>
        <div className="col-md-3">
          <input type="text" placeholder="Category" className="form-control" onChange={handleInputChange} name="category" />
        </div>
        <div className="col-md-3">
          <input type="url" alt="image" placeholder="Image link" className="form-control" onChange={handleInputChange} name="icon" />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
      { created && <Navigate to="/my_games" />}
    </section>
  );
};

export default AddGame;
