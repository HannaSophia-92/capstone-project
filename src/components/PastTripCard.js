import styled from 'styled-components';
import Button from './Button';

export default function PastTripCard({
  country,
  city,
  _id,
  image,
  handleCardToggle,
  onDeleteNote,
}) {
  return (
    <PastTripCards key={_id}>
      <Image alt="country" src={image} />
      <Place>
        {country}, {city}
      </Place>
      <Button onClick={handleToggle}>Notes</Button>
    </PastTripCards>
  );

  function handleToggle() {
    handleCardToggle();
  }
}

const PastTripCards = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 300px;
  border-radius: 40px;
  background-color: #2f2f2f;
  color: #f6f6f6;
  position: relative;
`;

const Image = styled.img`
  border-radius: 40px;
`;

const Place = styled.span`
  margin: 15px;
  text-align: left;
`;

const Delete = styled.div`
  position: absolute;
  bottom: 10px;
  right: 25px;

  &:hover {
    color: red;
  }
`;
