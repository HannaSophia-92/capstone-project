import styled from 'styled-components';

export default function FutureTripCard({ trip }) {
  return (
    <Card>
      <Date>{trip.date}</Date>
      <span>{trip.destination}</span>
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
`;

const Date = styled.span`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
