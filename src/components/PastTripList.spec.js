import { render, screen } from '@testing-library/react';
import PastTripList from './PastTripList';

describe('PastTripList', () => {
  it('renders a list of cards with destinations', () => {
    render(<PastTripList />);

    const pastTripList = screen.getByRole('list');
    expect(pastTripList).toBeInTheDocument();
  });
});
