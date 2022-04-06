import { render, screen } from '@testing-library/react';
import PastTripNotes from './PastTripNotes';

describe('PastTripNotes', () => {
  it('renders notes and a delete button', () => {
    render(<PastTripNotes note="Steenberg Winery" />);

    const notes = screen.getByText(/Steenberg Winery/i);
    expect(notes).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
