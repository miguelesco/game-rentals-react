import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';
import HomePage from '../../pages/HomePage';

describe('Test Homepage component', () => {
  // Arrange
  const store = configureStore();
  const setRender = () => {
    const component = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
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
    expect(getByText('LASTEST GAMES')).toBeInTheDocument();
  });

  test('Should render the subtitle', () => {
    const { getByText } = component;
    expect(getByText('Please select a Game')).toBeInTheDocument();
  });
});
