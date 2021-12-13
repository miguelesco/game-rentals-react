import { Provider } from 'react-redux';
import configureStore from './store/store';
import HomePage from './pages/HomePage';
import SideBar from './components/SideBar';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <SideBar />
      <HomePage />
    </Provider>
  );
}

export default App;
