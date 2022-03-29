import PastTripCard from './components/PastTripCard';
import styled from 'styled-components';
import PastTripNotes from './components/PastTripNotes';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div>
      <Heading>Journi</Heading>
      <PastTripCard />
      <PastTripNotes onSubmit={handleNewNote} />
    </div>
  );

  function handleNewNote(note) {
    const newNotes = { note };
    setNotes([...notes, newNotes]);
  }
}

const Heading = styled.h1`
  margin: 20px;
  text-align: center;
`;

export default App;
