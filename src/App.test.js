import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders h1 element "Moyo"', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/moyo/i);
  expect(linkElement).toBeInTheDocument();
});
