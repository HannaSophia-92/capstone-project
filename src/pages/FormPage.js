import FutureTripForm from '../components/FutureTripForm/FutureTripForm';

export default function FuturePage({ onCreateTrip }) {
  return (
    <>
      <h2>New Trip</h2>
      <FutureTripForm onCreateTrip={onCreateTrip} />
    </>
  );
}
