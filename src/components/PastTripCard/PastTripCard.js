import styled from 'styled-components';
import { MdOutlineNoteAlt } from 'react-icons/md';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import Button from '../Button/Button';

export default function PastTripCard({
  country,
  city,
  _id,
  image,
  handleCardToggle,
}) {
  return (
    <Card key={_id}>
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
  background-color: #2f2f2f;
  color: #f6f6f6;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Image = styled.img`
  border-radius: 20px;
  margin-top: 15px;
`;

const Place = styled.span`
  margin: 15px;
  text-align: left;
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  color: #f6f6f6;
`;
