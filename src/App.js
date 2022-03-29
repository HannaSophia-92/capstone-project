import PastTripCard from './components/PastTripCard';
import styled from 'styled-components';
import PastTripNotes from './components/PastTripNotes';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);
  return (
    <div>
      <Heading>Journi</Heading>
      <PastTripCard notes={notes} />
      <PastTripNotes onSubmit={handleNewNote} />
    </div>
  );

  function handleNewNote(note) {
    //const newNotes = { note };
    const newNotes = {
      id: nanoid(),
      note: note,
    };

    setNotes([...notes, newNotes]);
    console.log(newNotes);
  }
}

const Heading = styled.h1`
  margin: 20px;
  text-align: center;
`;

export default App;
