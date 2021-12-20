import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import SignIn from '../../pages/Sign_in';

describe('Test Homepage component', () => {
  // Arrange
  const store = configureStore();
  const setRender = () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <SignIn />
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
    expect(getByText('Sign In')).toBeInTheDocument();
  });

  test('Should render the submenu', () => {
    const { getByText } = component;
    expect(getByText('Create an Account')).toBeInTheDocument();
  });

  test('Should sign in', () => {
    const inputGame = screen.getByTestId('username-input');
    fireEvent.change(inputGame, { target: { value: 'joao' } });
    expect(inputGame.value).toBe('joao');
  });

  test('Should sign in', () => {
    const inputGame = screen.getByTestId('username-input');
    const login = screen.getByText('Log In');
    fireEvent.change(inputGame, { target: { value: 'joao' } });
    fireEvent.click(login);
  });
});
