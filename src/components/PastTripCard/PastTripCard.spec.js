import { render, screen } from '@testing-library/react';
import PastTripCard from './PastTripCard';

describe('PastTripCard', () => {
  it('renders a destination', () => {
    render(<PastTripCard destination="South Africa" />);

    const destination = screen.getByText(/south africa/i);
    expect(destination).toBeInTheDocument();
  });
});
