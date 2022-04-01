import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi';

export default function FutureTripCard({ trip, onDeleteCard }) {
  return (
    <Card>
      <Date>
        {trip.startDate} - {trip.endDate}
      </Date>
      <span>{trip.destination}</span>
      <Delete onClick={() => onDeleteCard(trip._id)}>
        <FiTrash size={25} />
      </Delete>
    </Card>
  );
}

const Card = styled.article`
  padding: 15px;
  margin: 20px;
  border-radius: 40px;
  background-color: #2f2f2f;
  color: #f6f6f6;
  height: 300px;
  position: relative;
`;

const Date = styled.span`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const Delete = styled.div`
  position: absolute;
  bottom: 10px;
  right: 25px;

  &:hover {
    color: red;
  }
`;
