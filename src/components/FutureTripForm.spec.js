import { render, screen } from '@testing-library/react';
import FutureTripForm from './FutureTripForm';
import userEvent from '@testing-library/user-event';

describe('FutureTripForm', () => {
  it('renders an input with a placeholder and a button', () => {
    render(
      <FutureTripForm
        labelText="Add a new Destination:"
        placeholder="Country/City"
        name="destination"
      />
    );

    const inputDestination = screen.getByLabelText(/Add a new Destination:/i);
    expect(inputDestination).toHaveAttribute('placeholder', 'Country/City');

    const inputDate = screen.getByLabelText(/Add Dates:/i);
    expect(inputDate).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders a form with the name "New Trip"', () => {
    render(<FutureTripForm />);

    const form = screen.getByRole('form', { name: 'New Trip' });
    expect(form).toBeInTheDocument();
  });

  it('does not submit form data when destination field is not filled out', () => {
    const neverCalled = jest.fn();
    render(<FutureTripForm onSubmit={neverCalled} />);

    const inputDestination = screen.getByLabelText(/Add a new Destination:/i);

    userEvent.type(inputDestination, '{enter}');

    expect(neverCalled).not.toHaveBeenCalledWith();
  });
});
