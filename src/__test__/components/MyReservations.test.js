import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import MyReservations from '../../pages/MyReservations';

describe('Test Homepage component', () => {
  // Arrange
  const store = configureStore();
  const setRender = () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <MyReservations />
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
  test('Should render the right messages', () => {
    const { getByText } = component;
    expect(getByText('No reservations')).toBeInTheDocument();
  });
});
