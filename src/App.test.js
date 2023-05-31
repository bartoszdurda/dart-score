import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dart scoreboard header', () => {
  render(<App />);
  const linkElement = screen.getByText(/DART SCOREBOARD/i);
  expect(linkElement).toBeInTheDocument();
});
