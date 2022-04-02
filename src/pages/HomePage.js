import Header from '../components/Header';
import PastTripList from '../components/PastTripList';

export default function HomePage({
  onHandleNewNote,
  notes,
  onDeleteNote,
  handleCardToggle,
}) {
  return (
    <>
      <Header />
      <PastTripList
        onHandleNewNote={onHandleNewNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        handleCardToggle={handleCardToggle}
      />
    </>
  );
}
