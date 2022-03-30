import PastTripCard from './components/PastTripCard';
import styled from 'styled-components';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Heading>Journi</Heading>
      <PastTripCard onHandleNewNote={handleNewNote} notes={notes} />
    </div>
  );

  function handleNewNote(note) {
    const newNotes = {
      id: nanoid(),
      note,
    };

    setNotes([...notes, newNotes]);
  }
}

const Heading = styled.h1`
  margin: 20px;
  text-align: center;
`;

export default App;
