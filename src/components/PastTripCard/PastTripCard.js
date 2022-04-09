import styled from 'styled-components';
import { MdOutlineNoteAlt } from 'react-icons/md';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import Button from '../Button/Button';

export default function PastTripCard({
  country,
  city,
  image,
  handleCardToggle,
}) {
  return (
    <Card>
      <Image alt="country" src={image} />
      <Place>
        {country}, {city}
      </Place>
      <Button
        variant="notes"
        onClick={handleToggle}
        aria-labelledby="Enter notes"
      >
        <ScreenReaderOnly>Notes</ScreenReaderOnly>
        <MdOutlineNoteAlt size={25} />
      </Button>
    </Card>
  );

  function handleToggle() {
    handleCardToggle();
  }
}

const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 330px;
  border-radius: 40px;
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  position: relative;
  box-shadow: var(--box-shadow);
`;

const Image = styled.img`
  border-radius: 20px;
  margin-top: 15px;
`;

const Place = styled.span`
  margin: 15px;
  text-align: left;
`;
