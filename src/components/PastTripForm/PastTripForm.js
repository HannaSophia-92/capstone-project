import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { Form, Label, Textarea } from '../styledComponents/StyledForm';

export default function PastTripNotes({ onHandleNewNote }) {
  const [textInput, setTextInput] = useState('');

  return (
    <Wrapper>
      <Form
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
        <ButtonWrapper>
          <Button variant="add" type="submit">
            Add notes
          </Button>
        </ButtonWrapper>
      </Form>
    </Wrapper>
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  margin: 20px;
`;
