import FutureTripCard from '../components/FutureTripCard/FutureTripCard';
import styled from 'styled-components';

export default function FuturePage({
  trips,
  onDeleteCard,
  onFinishTrip,
  onEdit,
}) {
  return (
    <>
      <Heading>Future Trips</Heading>
      <Card>
        {trips.map(({ startDate, endDate, destination, textNotes, _id }) => {
          return (
            <FutureTripCard
              onDelete={() => onDeleteCard(_id)}
              onFinishTrip={onFinishTrip}
              onEdit={onEdit}
              _id={_id}
              key={_id}
              startDate={startDate}
              endDate={endDate}
              destination={destination}
              textNotes={textNotes}
            />
          );
        })}
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
