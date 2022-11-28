import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout';
import '@testing-library/jest-dom';

describe('Layout', () => {
  it('Renders a header', () => {
    render(<Layout />);
    const header = screen.getByText('My recipe book');
    expect(header).toBeInTheDocument();
  });
  it('Renders a footer', () => {
    render(<Layout />);
    const footer = screen.getByText('Ale Delos');
    expect(footer).toBeInTheDocument();
  });
  it('Renders a main section', () => {
    render(<Layout />);
    const footer = screen.getByRole('main');
    expect(footer).toBeInTheDocument();
  });
});
