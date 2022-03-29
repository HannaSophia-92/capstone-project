import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function PastTripNotes({ onSubmit }) {
  const [textInput, setTextInput] = useState('');
  console.log(textInput);

  return (
    <NotesForm
      aria-labelledby="notes-form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label htmlFor="notes">Things to remember</label>
      <input
        type="text"
        id="notes"
        name="notes"
        placeholder="Enter your notes..."
        value={textInput}
        onChange={event => setTextInput(event.target.value)}
      />
      <Button type="submit" id="notes-form" onClick={() => onSubmit(textInput)}>
        Add
      </Button>
      <p>{textInput}</p>
    </NotesForm>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.notes;
    onSubmit(inputElement.value);
    setTextInput('');
    form.reset();
  }
}

const NotesForm = styled.form`
  display: flex;
  flex-direction: column;
`;
