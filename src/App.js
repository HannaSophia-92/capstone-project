import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FormPage from './pages/FormPage';
import Navigation from './components/Navigation/Navigation';
import FuturePage from './pages/FuturePage';
import { useLocalStorage } from 'usehooks-ts';
import HomePage from './pages/HomePage';

function App() {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [trips, setTrips] = useLocalStorage('trips', []);
  const [history, setHistory] = useLocalStorage('history', []);

  const navigate = useNavigate();

  console.log(history);

  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onHandleNewNote={handleNewNote}
              notes={notes}
              onDeleteNote={handleDeleteNote}
              history={history}
              trips={trips}
            />
          }
        />
        <Route
          path="/formPage"
          element={<FormPage onCreateTrip={createTrip} />}
        />
        <Route
          path="/futurePage"
          element={
            <FuturePage
              trips={trips}
              onDeleteCard={handleDeleteCard}
              onFinishTrip={handleFinishTrip}
            />
          }
        />
      </Routes>
      <Footer>
        <Navigation />
      </Footer>
    </Wrapper>
  );

  function handleFinishTrip(startDate, endDate, destination, textNotes) {
    setHistory([{ startDate, endDate, destination, textNotes }, ...history]);
    setTrips([]);
    navigate('./');
  }

  function handleDeleteCard(tripId) {
    setTrips(trips.filter(trip => trip._id !== tripId));
  }

  function createTrip(formData) {
    setTrips([...trips, formData]);
    navigate('/futurePage');
  }

  function handleDeleteNote(noteId) {
    setNotes(notes.filter(note => note._id !== noteId));
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

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default App;
