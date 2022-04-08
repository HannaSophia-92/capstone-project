import { render, screen } from '@testing-library/react';
import FutureTripCard from './FutureTripCard';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('FutureTripCard', () => {
  it('renders a destination, a start date, end date and notes', () => {
    render(
      <MemoryRouter>
        <FutureTripCard
          destination="South Africa"
          dateStart="06-04-22"
          dateEnd="20-05-22"
          textNotes="passport"
        />
      </MemoryRouter>
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

  it('renders three buttons', () => {
    render(
      <MemoryRouter>
        <FutureTripCard />
      </MemoryRouter>
    );

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(3);
  });
});
