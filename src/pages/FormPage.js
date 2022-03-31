import FutureTripForm from '../components/FutureTripForm';

export default function FuturePage({ onCreateTrip }) {
  return (
    <>
      <h2>Future Trips</h2>
      <FutureTripForm onCreateTrip={onCreateTrip} />
    </>
  );
}
