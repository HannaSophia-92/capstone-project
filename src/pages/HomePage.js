import Header from '../components/Header/Header';
import PastTripList from '../components/PastTripList/PastTripList';

export default function HomePage({ onHandleNewNote, notes, onDeleteNote }) {
  return (
    <>
      <Header />
      <PastTripList
        onHandleNewNote={onHandleNewNote}
        notes={notes}
        onDelete={onDeleteNote}
      />
    </>
  );
}
