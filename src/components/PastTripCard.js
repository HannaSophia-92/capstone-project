import pastTripList from '../data';
import styled from 'styled-components';
import PastTripList from './PastTripList';

export default function PastTripCard() {
  return (
    <PastTripCards role="list" aria-label="past-trips">
      {pastTripList.map(({ country, city, _id }) => {
        return <PastTripList country={country} city={city} key={_id} />;
      })}
    </PastTripCards>
  );
}

const PastTripCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 20px;
`;
