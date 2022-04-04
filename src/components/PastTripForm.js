import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function PastTripNotes({ onHandleNewNote }) {
  const [textInput, setTextInput] = useState('');

  return (
    <>
      <NotesForm
        aria-labelledby="notes-form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Label htmlFor="notes">Things to remember:</Label>
        <ScreenReaderOnly id="notes-form">
          Enter notes to remember
        </ScreenReaderOnly>
        <Textarea
          type="text"
          id="notes"
          name="notes"
          placeholder="Enter your notes..."
          value={textInput}
          onChange={event => setTextInput(event.target.value)}
          maxLength="500"
          rows="3"
          required
        />
        <Button variant="add" type="submit">
          Add notes
        </Button>
      </NotesForm>
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.notes.value.trim();
    onHandleNewNote(inputValue);
    form.reset();
    setTextInput('');
  }
}

const NotesForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

const Label = styled.label`
  padding: 15px 0;
`;

const Textarea = styled.textarea`
  padding: 5px;
  margin-bottom: 10px;
`;
