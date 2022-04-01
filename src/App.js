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
    <Wrapper>
      <Heading>Journi</Heading>
      <Routes>
        <Route
          path="/"
          element={
            <PastTripList
              onHandleNewNote={handleNewNote}
              notes={notes}
              onDeleteNote={handleDeleteNote}
            />
          }
        />
        <Route
          path="/formPage"
          element={<FormPage onCreateTrip={createTrip} />}
        />
        <Route
          path="/futurePage"
          element={<FuturePage trips={trips} onDeleteCard={handleDeleteCard} />}
        />
      </Routes>
      <Footer>
        <Navigation />
      </Footer>
    </Wrapper>
  );

  function handleDeleteCard(tripId) {
    setTrips(trips.filter(trip => trip._id !== tripId));
  }

  function handleDeleteNote(noteId) {
    setNotes(notes.filter(note => note._id !== noteId));
  }

  function createTrip(formData) {
    setTrips([...trips, formData]);
    navigate('/futurePage');
  }

  function handleNewNote(note) {
    const newNotes = {
      _id: nanoid(),
      note,
    };
    setNotes([...notes, newNotes]);
  }
}

const Wrapper = styled.div`
  margin-bottom: 60px;
`;

const Heading = styled.h1`
  margin: 20px;
  text-align: center;
  color: #2f2f2f;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default App;
