import { render, screen } from '@testing-library/react';
import FutureTripCard from './FutureTripCard';

describe('FutureTripCard', () => {
  it('renders a destination, a start date, end date and notes', () => {
    render(
      <FutureTripCard
        destination="South Africa"
        startDate="06-04-22"
        endDate="20-05-22"
        notes="passport"
      />
    );

    const destination = screen.getByText(/south africa/i);
    expect(destination).toBeInTheDocument();

    const startDate = screen.getByText(/22/i);
    expect(startDate).toBeInTheDocument();

    const endDate = screen.getByText(/22/i);
    expect(endDate).toBeInTheDocument();

    const note = screen.getByText(/passport/i);
    expect(note).toBeInTheDocument();
  });

  it('renders a delete button as icon', () => {
    render(<FutureTripCard />);

    const buttonDelete = screen.getByRole('button', { name: /delete/i });

    expect(buttonDelete).toBeInTheDocument();
  });
});
