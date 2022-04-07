import Header from '../components/Header/Header';
import PastTripList from '../components/PastTripList/PastTripList';

export default function HomePage({
  onHandleNewNote,
  notes,
  onDeleteNote,
  history,
}) {
  console.log(history);
  return (
    <>
      <Header />

      <PastTripList
        onHandleNewNote={onHandleNewNote}
        notes={notes}
        onDelete={onDeleteNote}
        {...history}
      />
    </>
  );
}
