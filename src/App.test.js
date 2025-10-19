import { render, screen } from '@testing-library/react';
import App from './App';

test('renders company dashboard header', () => {
  render(<App />);
  const titleElement = screen.getByRole('heading', { name: /Company Dashboard/i });
  expect(titleElement).toBeInTheDocument();
});

test('renders filter controls', () => {
  render(<App />);
  const filterElement = screen.getByText(/Filter & Search Companies/i);
  expect(filterElement).toBeInTheDocument();
});

test('renders search input', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/Search by company name/i);
  expect(searchInput).toBeInTheDocument();
});
