import PastTripList from './components/PastTripList';
import styled from 'styled-components';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FutureTrips from './pages/FutureTrips';
import Navigation from './components/Navigation';

function App() {
  const [notes, setNotes] = useState([]);
  //const navigate = useNavigate();

  return (
    <div>
      <Heading>Journi</Heading>
      <Routes>
        <Route
          path="/"
          element={
            <PastTripList onHandleNewNote={handleNewNote} notes={notes} />
          }
        />
        <Route path="/futureTrips" element={<FutureTrips />} />
      </Routes>
      <Navigation />
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
