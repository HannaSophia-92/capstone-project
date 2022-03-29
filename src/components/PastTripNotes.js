import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function PastTripNotes({ onHandleNewNote }) {
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
        required
      />
      <Button type="submit" id="notes-form">
        Add
      </Button>
    </NotesForm>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.notes;
    onHandleNewNote(inputElement.value);
    form.reset();
    setTextInput('');
  }
}

const NotesForm = styled.form`
  display: flex;
  flex-direction: column;
`;
