import './App.css';
import { Provider } from 'react-redux';
import TestComponent from './components/test';
import configureStore from './store/store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TestComponent />
      </div>
    </Provider>
  );
}

export default App;
