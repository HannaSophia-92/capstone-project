import { render, screen } from '@testing-library/react';
import PastTripNotes from './PastTripNotes';
import userEvent from '@testing-library/user-event';

describe('PastTripNotes', () => {
  it('renders an input with a placeholder', () => {
    render(
      <PastTripNotes
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

  it('renders a form with the name "Add notes"', () => {
    render(<PastTripNotes />);

    const form = screen.getByRole('form', { name: 'Add notes' });
    expect(form).toBeInTheDocument();
  });

  it('submits form data when field is filled out', () => {
    const handleNewNote = jest.fn();
    render(<PastTripNotes onHandleNewNote={handleNewNote} />);

    const input = screen.getByLabelText(/Things to remember/i);
    const button = screen.getByRole('button');

    userEvent.type(input, '{enter}');
    userEvent.click(button);

    expect(handleNewNote).not.toHaveBeenCalledWith();
  });
});
