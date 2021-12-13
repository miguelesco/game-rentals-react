import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route, Navigate } from 'react-router';
import HomePage from './pages/HomePage';
import SignUp from './pages/Sign_up';
import SignIn from './pages/Sign_in';

function App() {
  const user = useSelector((state) => state.user.user_information);
  return (
    <Routes>
      <Route path="sign_in" element={<SignIn />} />
      <Route path="sign_up" element={<SignUp />} />
      <Route path="/home" element={<HomePage />} />
      <Route
        path="/"
        render={() => (user.username === undefined ? <Navigate to="sign_up" /> : <Navigate to="/home" />)}
        element={(user.username === undefined ? <Navigate to="sign_up" /> : <Navigate to="/home" />)}
      />
    </Routes>
  );
}

export default App;
