import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../../pages/HomePage';

const setRender = () => {
  const component = render(<HomePage />);
  return component;
};

describe('Test Homepage component', () => {
  // Arrange
  let component;
  beforeEach(() => {
    component = setRender();
  });
  // Act
  // Assert
});
