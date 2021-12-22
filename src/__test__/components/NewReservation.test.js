import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import ReservationPage from '../../pages/ReservationPage';
import data from '../data';

describe('Test Homepage component', () => {
  // Arrange
  const store = configureStore();
  localStorage.setItem('userInfo', JSON.stringify(data));
  const setRender = () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <ReservationPage />
        </Provider>
        ,
      </BrowserRouter>,
    );
    return component;
  };
  // Act
  let component;
  beforeEach(() => {
    component = setRender();
  });
  // Assert
  test('Should render the title', () => {
    const { getByText } = component;
    expect(getByText("Yoru's")).toBeInTheDocument();
  });
  test('Should render the subtitle', () => {
    const { getByText } = component;
    expect(getByText('Reserve a Game, Have Fun')).toBeInTheDocument();
  });
  test('Should render text', () => {
    const { getByText } = component;
    expect(getByText('When reserving a game please pay attention to the date and the location')).toBeInTheDocument();
  });

  test('Should render Location input', () => {
    const inputLocation = screen.getByTestId('location-input');
    expect(inputLocation.value).toBe('');
  });

  test('Should render Game select', () => {
    const inputGame = screen.getByTestId('game-select');
    expect(inputGame.value).toBe('');
  });

  test('Should render Reserve button', () => {
    const { getByText } = component;
    expect(getByText('Reserve')).toBeInTheDocument();
  });
});
