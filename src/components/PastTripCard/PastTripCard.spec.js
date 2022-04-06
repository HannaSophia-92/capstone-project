import { render, screen } from '@testing-library/react';
import PastTripCard from './PastTripCard';

describe('PastTripCard', () => {
  it('renders a country and a city name', () => {
    render(<PastTripCard country="South Africa" city="Cape Town" />);

    const country = screen.getByText(/south africa/i);
    expect(country).toBeInTheDocument();

    const city = screen.getByText(/cape town/i);
    expect(city).toBeInTheDocument();
  });
});
