import { render, screen } from '@testing-library/react';
import PastTripForm from './PastTripForm';
import userEvent from '@testing-library/user-event';

describe('PastTripNotes', () => {
  it('renders an input with a placeholder and a button', () => {
    render(
      <PastTripForm
        labelText="Things to remember"
        placeholder="Enter your notes..."
        name="notes"
      />
    );

    const input = screen.getByLabelText(/Things to remember/i);
    expect(input).toHaveAttribute('placeholder', 'Enter your notes...');

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders a form with the name "Enter notes to remember"', () => {
    render(<PastTripForm />);

    const form = screen.getByRole('form', { name: 'Enter notes to remember' });
    expect(form).toBeInTheDocument();
  });

  it('submits form data when field is filled out', () => {
    const handleNewNote = jest.fn();
    render(<PastTripForm onHandleNewNote={handleNewNote} />);

    const input = screen.getByLabelText(/Things to remember/i);
    const button = screen.getByRole('button');

    userEvent.type(input, 'Lorem ipsum');
    userEvent.click(button);

    expect(handleNewNote).toHaveBeenCalledWith('Lorem ipsum');
  });
});
