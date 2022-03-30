import { useState } from 'react';
import styled from 'styled-components';
import ButtonAdd from './Button';

export default function PastTripNotes({ onHandleNewNote }) {
  const [textInput, setTextInput] = useState('');
  console.log(textInput);

  return (
    <>
      <NotesForm
        aria-labelledby="notes-form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Label htmlFor="notes">Things to remember:</Label>
        <Input
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
        <ButtonAdd variant="add" type="submit" id="notes-form">
          Add notes
        </ButtonAdd>
      </NotesForm>
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputElement = form.elements.notes.value.trim();
    onHandleNewNote(inputElement);
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

const Input = styled.textarea`
  padding: 5px;
`;
