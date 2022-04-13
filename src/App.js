import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FormPage from './pages/FormPage';
import Navigation from './components/Navigation/Navigation';
import FuturePage from './pages/FuturePage';
import { useLocalStorage } from 'usehooks-ts';
import HomePage from './pages/HomePage';

function App() {
  const [futureTrips, setFutureTrips] = useLocalStorage('trips', []);
  const [history, setHistory] = useLocalStorage('history', []);

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onHandleNewNote={handleNewNote}
              onDeleteNote={handleDeleteNote}
              history={history}
              trips={futureTrips}
              savePicture={handleSavePicture}
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
              trips={futureTrips}
              onDeleteCard={handleDeleteCard}
              onFinishTrip={handleFinishTrip}
              onEdit={handleEdit}
            />
          }
        />
      </Routes>
      <Footer>
        <Navigation />
      </Footer>
    </Wrapper>
  );

  function handleEdit(updatedValue) {
    const newContent = futureTrips.map(trip => {
      if (trip._id === updatedValue._id) {
        const newTripContent = { ...trip, ...updatedValue };
        return newTripContent;
      }
      return trip;
    });
    setFutureTrips(newContent);
  }

  function handleFinishTrip(
    startDate,
    endDate,
    destination,
    textNotes,
    _id,
    picture
  ) {
    setHistory([
      { startDate, endDate, destination, textNotes, _id, picture },
      ...history,
    ]);
    setFutureTrips(futureTrips.filter(trip => trip._id !== _id));
    navigate('./');
  }

  function handleSavePicture(picture, _id) {
    setHistory(
      history.map(card => {
        if (card._id === _id) {
          return { ...card, picture };
        } else {
          return card;
        }
      })
    );
  }

  function handleDeleteCard(tripId) {
    setFutureTrips(futureTrips.filter(trip => trip._id !== tripId));
  }

  function createTrip(formData) {
    setFutureTrips([...futureTrips, formData]);
    navigate('/futurePage');
  }

  function handleDeleteNote(noteId) {
    setHistory(
      history.map(card => {
        const filteredNotes = card.notes.filter(note => note._id !== noteId);
        return { ...card, notes: filteredNotes };
      })
    );
  }

  function handleNewNote(note, _id) {
    const newNote = { ...note, _id: nanoid() };
    setHistory(
      history.map(el => {
        if (el._id === _id) {
          const notes = el.notes ? [...el.notes, newNote] : [newNote];
          return { ...el, notes };
        }
        return el;
      })
    );
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
