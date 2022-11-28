import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout';
import '@testing-library/jest-dom';

describe('Layout', () => {
  beforeEach(() => {
    render(
      <Layout>
        <>Children</>
      </Layout>
    );
  });
  it('Renders a header', () => {
    const header = screen.getByText('My recipe book');
    expect(header).toBeInTheDocument();
  });
  it('Renders a footer', () => {
    const footer = screen.getByText('Ale Delos');
    expect(footer).toBeInTheDocument();
  });
  it('Renders a main section', () => {
    const footer = screen.getByRole('main');
    expect(footer).toBeInTheDocument();
  });
});
