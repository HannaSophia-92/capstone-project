import { render, screen } from '@testing-library/react';
import PastTripCard from './PastTripCard';

describe('PastTripCard', () => {
  it('renders a list of cards with destinations', () => {
    render(<PastTripCard />);

    const pastTripCards = screen.getByRole('list');
    expect(pastTripCards).toBeInTheDocument();
  });
});
