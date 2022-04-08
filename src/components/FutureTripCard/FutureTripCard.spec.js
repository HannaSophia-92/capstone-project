import { render, screen } from '@testing-library/react';
import FutureTripCard from './FutureTripCard';

describe('FutureTripCard', () => {
  it('renders a destination, a start date, end date and notes', () => {
    render(
      <FutureTripCard
        destination="South Africa"
        dateStart="06-04-22"
        dateEnd="20-05-22"
        notes="passport"
      />
    );

    const destination = screen.getByText(/south africa/i);
    expect(destination).toBeInTheDocument();

    const dateStart = screen.getByText(/22/i);
    expect(dateStart).toBeInTheDocument();

    const dateEnd = screen.getByText(/22/i);
    expect(dateEnd).toBeInTheDocument();

    const note = screen.getByText(/passport/i);
    expect(note).toBeInTheDocument();
  });

  it('renders a delete button as icon', () => {
    render(<FutureTripCard />);

    const buttonDelete = screen.getByRole('button', { name: /delete/i });

    expect(buttonDelete).toBeInTheDocument();
  });
});
