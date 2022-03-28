import styled from 'styled-components';

export default function PastTripList({ pastTripList }) {
  return (
    <Cards>
      {pastTripList.map(pastTrip => {
        return (
          <li key={pastTrip._id}>
            {pastTrip.country}, {pastTrip.city}
          </li>
        );
      })}
    </Cards>
  );
}

const Cards = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 20px;
  margin: 20px;
`;
