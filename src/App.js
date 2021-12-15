import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route, Navigate } from 'react-router';
import HomePage from './pages/HomePage';
import SignUp from './pages/Sign_up';
import SignIn from './pages/Sign_in';
import GameDetails from './pages/GameDetailsPage';
import dispatchGetGames from './store/slices/get_games_slice';
import ReservationPage from './pages/ReservationPage';
import Layout from './Layout';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatchGetGames(dispatch);
  }, []);
  const user = localStorage.getItem('userInfo');
  return (
    <Routes>
      <Route
        path="/"
        element={(user === undefined ? <Navigate to="sign_up" /> : <Navigate to="/home" />)}
      />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route element={<Layout />}>
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/games/:id/reservation" element={<ReservationPage />} />
        <Route path="/reservation/new" element={<ReservationPage />} />
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
