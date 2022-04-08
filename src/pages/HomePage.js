import Header from '../components/Header/Header';
import PastTripList from '../components/PastTripList/PastTripList';

export default function HomePage({
  onHandleNewNote,
  notes,
  onDeleteNote,
  history,
}) {
  return (
    <>
      <Header />
      <PastTripList
        notes={notes}
        onHandleNewNote={onHandleNewNote}
        onDelete={onDeleteNote}
        history={history}
      />
    </>
  );
}
