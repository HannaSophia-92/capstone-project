import FutureTripCard from '../components/FutureTripCard';
import styled from 'styled-components';

export default function FuturePage({ trips, onDeleteCard }) {
  return (
    <>
      <Heading>Future Trips</Heading>
      <ul>
        {trips.map((trip, index) => (
          <li key={index}>
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
