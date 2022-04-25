import { render, screen } from '@testing-library/react';
import FutureTripCard from './FutureTripCard';
import { MemoryRouter } from 'react-router-dom';

describe('FutureTripCard', () => {
  it('renders a destination, a start date, end date and notes', () => {
    render(
      <MemoryRouter>
        <FutureTripCard
          destination="South Africa"
          dateStart="06-04-22"
          dateEnd="20-05-22"
          textNotes="passport"
          coordinates="1"
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
        <FutureTripCard coordinates="1" />
      </MemoryRouter>
    );

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(4);
  });
});
