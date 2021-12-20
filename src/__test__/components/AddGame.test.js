import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import AddGame from '../../pages/AddGame';
import data from '../data';

describe('Test Homepage component', () => {
  // Arrange
  const store = configureStore();
  localStorage.setItem('userInfo', JSON.stringify(data));
  const setRender = () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <AddGame />
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
    expect(getByText('Add a new Game to sell')).toBeInTheDocument();
  });

  test('Should render Title input', () => {
    const inputGame = screen.getByTestId('title-input');
    expect(inputGame.value).toBe('');
  });

  test('Should render Description input', () => {
    const inputGame = screen.getByTestId('description-input');
    expect(inputGame.value).toBe('');
  });
  test('Should render Price input', () => {
    const inputGame = screen.getByTestId('price-input');
    expect(inputGame.value).toBe('0');
  });
  test('Should render Category input', () => {
    const inputGame = screen.getByTestId('category-input');
    expect(inputGame.value).toBe('');
  });
  test('Should render Image input', () => {
    const inputGame = screen.getByTestId('image-input');
    expect(inputGame.value).toBe('');
  });
  test('Should render Send button', () => {
    const { getByText } = component;
    expect(getByText('Send')).toBeInTheDocument();
  });
});
