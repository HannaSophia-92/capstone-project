import styled from 'styled-components';

export default function PastTripList({ country, city, _id }) {
  return (
    <PastTripLists key={_id}>
      {country}, {city}
    </PastTripLists>
  );
}

const PastTripLists = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  height: 200px;
  border-radius: 40px;
  background-color: #2f2f2f;
  color: #f6f6f6;
`;
