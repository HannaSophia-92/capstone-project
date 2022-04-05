import Header from '../components/Header';
import PastTripList from '../components/PastTripList';

export default function HomePage({
  onHandleNewNote,
  notes,
  onDeleteNote,
  handleCardToggle,
  _id,
}) {
  return (
    <>
      <Header />
      <PastTripList
        onHandleNewNote={onHandleNewNote}
        notes={notes}
        onDelete={onDeleteNote}
        handleCardToggle={handleCardToggle}
        _id={_id}
      />
    </>
  );
}
