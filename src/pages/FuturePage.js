import FutureTripCard from '../components/FutureTripCard/FutureTripCard';
import styled from 'styled-components';

export default function FuturePage({ trips, onDeleteCard, onFinishTrip }) {
  return (
    <>
      <Heading>Future Trips</Heading>
      <Card>
        {trips.map(trip => (
          <li key={trip._id}>
            <FutureTripCard
              {...trip}
              onDelete={() => onDeleteCard(trip._id)}
              onFinishTrip={onFinishTrip}
            />
          </li>
        ))}
      </Card>
    </>
  );
}

const Heading = styled.h2`
  margin: 20px;
`;

const Card = styled.ul`
  list-style: none;
  margin: 20px;
`;
