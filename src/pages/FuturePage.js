import FutureTripCard from '../components/FutureTripCard';

export default function FuturePage({ trips }) {
  return (
    <>
      <h2>Future Trips</h2>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
            <FutureTripCard trip={trip} />
          </li>
        ))}
      </ul>
    </>
  );
}
