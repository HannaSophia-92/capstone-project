import { render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  it('renders two buttons, if visible is true', () => {
    render(<Modal visible={true} />);

    const buttonKeep = screen.getByText(/Yes/i);
    const buttonCancel = screen.getByText(/No/i);

    expect(buttonKeep).toBeInTheDocument();
    expect(buttonCancel).toBeInTheDocument();
  });
});
