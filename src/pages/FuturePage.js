import FutureTripCard from '../components/FutureTripCard/FutureTripCard';
import styled from 'styled-components';

export default function FuturePage({
  trips,
  onDeleteCard,
  onFinishTrip,
  onEdit,
  onViewPort,
}) {
  return (
    <>
      <h2>Future Trips</h2>
      <Card>
        {trips.map(
          ({
            startDate,
            endDate,
            destination,
            textNotes,
            _id,
            coordinates,
          }) => {
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
                coordinates={coordinates}
                onViewPort={onViewPort}
              />
            );
          }
        )}
      </Card>
    </>
  );
}

const Card = styled.ul`
  list-style: none;
  margin: 20px;
`;
