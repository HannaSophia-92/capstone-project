import Header from '../components/Header';
import PastTripList from '../components/PastTripList';

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
