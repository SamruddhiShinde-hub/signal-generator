import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Stock Signal Generator title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Stock Signal Generator/i);
  expect(titleElement).toBeInTheDocument();
});
