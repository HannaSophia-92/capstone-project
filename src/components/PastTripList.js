export default function PastTripList({ pastTripList }) {
  return (
    <ul>
      {pastTripList.map(pastTrip => (
        <li key={pastTrip._id}>
          {pastTrip.country}, {pastTrip.city}
        </li>
      ))}
    </ul>
  );
}
