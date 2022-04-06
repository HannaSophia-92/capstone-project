import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders a navigation with three links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /past trips/i });
    const formLink = screen.getByRole('link', { name: /create new trip/i });
    const futureLink = screen.getByRole('link', { name: /future trips/i });

    expect(homeLink).toBeInTheDocument();
    expect(formLink).toBeInTheDocument();
    expect(futureLink).toBeInTheDocument();
  });
});
