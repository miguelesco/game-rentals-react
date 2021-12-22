import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dispatchCreateGame from '../store/slices/create_game_slice';
import dispatchGetUser from '../store/slices/get_user_slice';
import style from '../assets/components_styles/add_game.module.css';

const AddGame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
  const [message, setMessage] = useState('');
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
      setMessage('Game created successfully!');
      setGame({
        name: '',
        description: '',
        icon: '',
        price: 0,
        category: '',
        owner_id: user.id,
      });
    } else {
      setMessage('Error creating game');
    }
  };

  const confirm = () => {
    if (message === 'Game created successfully!') {
      navigate('/my_games');
    } else {
      setMessage('');
    }
  };

  return (
    <section id="add-game" className={style.add_game}>
      <div className={`${message === '' ? 'd-none' : 'd-block'} ${style.modal_outside}`}>
        <div className={`position-absolute ${style.modal_inner}`}>
          <p className={`${style.message}`}>{message}</p>
          <button className={`${style.confirm}`} type="button" onClick={() => { confirm(); }}>Confirm</button>
        </div>
      </div>
      <div className={`${style.padding}`}>
        <h1 className="title">Add a new Game to sell</h1>
        <p>
          In
          <p className="logo">Yoru&apos;s</p>
        </p>
        <form className="column text-center" onSubmit={createGame}>
          <div className="col-md-3">
            <input type="text" placeholder="Title" className="form-control" onChange={handleInputChange} value={game.name} name="name" />
          </div>
          <div className="col-md-3">
            <input type="text" placeholder="Description" className="form-control" onChange={handleInputChange} value={game.description} name="description" />
          </div>
          <div className="col-md-3">
            <input type="number" placeholder="Price" className="form-control" onChange={handleInputChange} value={game.price} name="price" />
          </div>
          <div className="col-md-3">
            <input type="text" placeholder="Category" className="form-control" onChange={handleInputChange} value={game.category} name="category" />
          </div>
          <div className="col-md-3">
            <input type="url" alt="image" placeholder="Image link" className="form-control" onChange={handleInputChange} value={game.icon} name="icon" />
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
};

export default AddGame;
