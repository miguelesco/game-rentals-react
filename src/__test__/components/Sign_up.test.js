import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import SignUp from '../../pages/Sign_up';

describe('Test Homepage component', () => {
  // Arrange
  const store = configureStore();
  const setRender = () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <SignUp />
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
    expect(getByText('Sign Up')).toBeInTheDocument();
  });

  test('Should render the submenu', () => {
    const { getByText } = component;
    expect(getByText('Logging')).toBeInTheDocument();
  });
});
