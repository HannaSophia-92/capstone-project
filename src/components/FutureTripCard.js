import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi';

export default function FutureTripCard({ trip, onDeleteCard }) {
  return (
    <Card>
      <Date>
        {trip.startDate} - {trip.endDate}
      </Date>
      <Destination>{trip.destination}</Destination>
      <Notes>{trip.notes}</Notes>
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Date = styled.span`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const Destination = styled.p`
  text-align: center;
  border-bottom: 1px solid #f6f6f6;
  padding: 10px;
`;

const Notes = styled.p`
  padding-top: 15px;
`;

const Delete = styled.div`
  position: absolute;
  bottom: 10px;
  right: 25px;

  &:hover {
    color: #ffcb74;
  }
`;
