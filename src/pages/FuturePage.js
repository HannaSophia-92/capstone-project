import FutureTripCard from '../components/FutureTripCard';
import styled from 'styled-components';

export default function FuturePage({ trips, onDeleteCard }) {
  console.log(trips);
  return (
    <>
      <Heading>Future Trips</Heading>
      <ul>
        {trips.map(trip => (
          <li key={trip._id}>
            <FutureTripCard trip={trip} onDeleteCard={onDeleteCard} />
          </li>
        ))}
      </ul>
    </>
  );
}

const Heading = styled.h2`
  margin: 20px;
`;
