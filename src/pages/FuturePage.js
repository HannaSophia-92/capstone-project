import FutureTripCard from '../components/FutureTripCard';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

export default function FuturePage({ trips, onDeleteCard }) {
  return (
    <>
      <Heading>Future Trips</Heading>
      <ul>
        {trips.map(trip => (
          <li key={trip._id}>
            <FutureTripCard
              _id={nanoid}
              trip={trip}
              onDeleteCard={onDeleteCard}
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
