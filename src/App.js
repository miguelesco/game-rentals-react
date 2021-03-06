import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route, Navigate } from 'react-router';
import SignUp from './pages/Sign_up';
import SignIn from './pages/Sign_in';
import GameDetails from './pages/GameDetailsPage';
import dispatchGetGames from './store/slices/get_games_slice';
import ReservationPage from './pages/ReservationPage';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import MyReservations from './pages/MyReservations';
import AddGame from './pages/AddGame';
import GamesList from './pages/GamesList';

function App() {
  const dispatch = useDispatch();
  const user = localStorage.getItem('userInfo');
  useEffect(() => {
    dispatchGetGames(dispatch);
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={(user === null ? <Navigate to="sign_in" /> : <Navigate to="/home" />)}
      />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route element={<Layout />}>
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/games/:id/reservation" element={<ReservationPage />} />
        <Route path="/new_game" element={<AddGame />} />
        <Route path="/reservation/new" element={<ReservationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/my_games" element={<GamesList />} />
        <Route path="/reservations" element={<MyReservations />} />
      </Route>
    </Routes>
  );
}

export default App;
