import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route, Navigate } from 'react-router';
import HomePage from './pages/HomePage';
import SignUp from './components/Sign_up';

function App() {
  const user = useSelector((state) => state.user.user_information.user);
  return (
    <Routes>
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
