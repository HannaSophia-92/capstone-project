import FutureTripCard from '../components/FutureTripCard';

export default function FuturePage({ trips, onDeleteCard }) {
  return (
    <>
      <h2>Future Trips</h2>
      <ul>
        {trips.map((trip, index) => (
          <li key={index} onClick={() => onDeleteCard(trip.index)}>
            <FutureTripCard trip={trip} />
          </li>
        ))}
      </ul>
    </>
  );
}
