import { render, screen } from '@testing-library/react';
import App from './App';
import { sum } from './sum';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('test sum', () => {
    expect(sum(1, 8)).toReturnWith(Error);
})