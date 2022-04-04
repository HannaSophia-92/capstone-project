import { render, screen } from '@testing-library/react';
import FutureTripForm from './FutureTripForm';
import userEvent from '@testing-library/user-event';

describe('FutureTripForm', () => {
  it('renders three input fields with placeholder and a button', () => {
    render(<FutureTripForm />);

    const inputDestination = screen.getByLabelText(/Add a new Destination:/i);
    expect(inputDestination).toHaveAttribute('placeholder', 'Country/City');

    const inputStartDate = screen.getByLabelText(/Start:/i);
    expect(inputStartDate).toBeInTheDocument();

    const inputEndDate = screen.getByLabelText(/End:/i);
    expect(inputEndDate).toBeInTheDocument();

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
