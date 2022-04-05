import styled from 'styled-components';
import { MdOutlineNoteAlt } from 'react-icons/md';
import ScreenReaderOnly from './ScreenReaderOnly';

export default function PastTripCard({
  country,
  city,
  _id,
  image,
  handleCardToggle,
}) {
  return (
    <PastTripCards key={_id}>
      <Image alt="country" src={image} loading="lazy" />
      <Place>
        {country}, {city}
      </Place>
      <StyledButton onClick={handleToggle}>
        <ScreenReaderOnly>Notes</ScreenReaderOnly>
        <MdOutlineNoteAlt size={25} />
      </StyledButton>
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
  height: 330px;
  border-radius: 40px;
  background-color: #2f2f2f;
  color: #f6f6f6;
  position: relative;
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
