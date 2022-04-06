import FutureTripCard from '../components/FutureTripCard/FutureTripCard';
import styled from 'styled-components';

export default function FuturePage({ trips, onDeleteCard }) {
  return (
    <>
      <Heading>Future Trips</Heading>
      <ul>
        {trips.map(trip => (
          <li key={trip._id}>
            <FutureTripCard
              trip={trip}
              onDelete={() => onDeleteCard(trip._id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

const Heading = styled.h2`
  margin: 20px;
`;
