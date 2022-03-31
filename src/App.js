import PastTripList from './components/PastTripList';
import styled from 'styled-components';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FormPage from './pages/FormPage';
import Navigation from './components/Navigation';
import FuturePage from './pages/FuturePage';

function App() {
  const [notes, setNotes] = useState([]);
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

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
        <Route
          path="/formPage"
          element={<FormPage onCreateTrip={createTrip} />}
        />
        <Route path="/futurePage" element={<FuturePage trips={trips} />} />
      </Routes>
      <Navigation />
    </div>
  );

  function createTrip(formData) {
    setTrips([...trips, formData]);
    navigate('/futurePage');
  }

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
