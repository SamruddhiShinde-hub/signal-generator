import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Stock Samruddhi Signal Generator title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Stock Samruddhi Signal Generator/i);
  expect(titleElement).toBeInTheDocument();
});
