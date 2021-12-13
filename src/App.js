import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route, Navigate } from 'react-router';
import HomePage from './pages/HomePage';
import SignUp from './pages/Sign_up';
import SignIn from './pages/Sign_in';
import GameDetails from './pages/GameDetailsPage';
import dispatchGetGames from './store/slices/get_games_slice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatchGetGames(dispatch);
  }, []);
  const user = useSelector((state) => state.user.user_information);
  return (
    <Routes>
      <Route
        path="/"
        element={(user.username === undefined ? <Navigate to="sign_up" /> : <Navigate to="/home" />)}
      />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/games/:id" element={<GameDetails />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
