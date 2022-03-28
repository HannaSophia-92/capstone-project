import { render, screen } from '@testing-library/react';
import PastTripList from './PastTripList';

describe('PastTripList', () => {
  it('renders a country and a city name', () => {
    render(<PastTripList country="South Africa" city="Cape Town" />);

    const country = screen.getByText(/south africa/i);
    expect(country).toBeInTheDocument();

    const city = screen.getByText(/cape town/i);
    expect(city).toBeInTheDocument();
  });
});
