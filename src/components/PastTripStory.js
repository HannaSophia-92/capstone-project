import styled from 'styled-components';
import dayjs from 'dayjs';
import Button from './Button/Button';
import ScreenReaderOnly from './styledComponents/ScreenReaderOnly';
import { MdOutlineNoteAlt } from 'react-icons/md';

export default function PastTripStory({
  startDate,
  endDate,
  destination,
  textNotes,
  handleCardToggle,
  _id,
}) {
  return (
    <>
      <Card>
        <Date>
          {dayjs(startDate).format('DD-MM-YY')} <span> to </span>
          {dayjs(endDate).format('DD-MM-YY')}
        </Date>
        <Destination>{destination}</Destination>
        <Notes>{textNotes}</Notes>
        <ButtonWrapper>
          <Button
            variant="notes"
            onClick={() => handleCardToggle(_id)}
            aria-labelledby="Enter notes"
          >
            <ScreenReaderOnly>Notes</ScreenReaderOnly>
            <MdOutlineNoteAlt size={25} />
          </Button>
        </ButtonWrapper>
      </Card>
    </>
  );
}

const Card = styled.li`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  padding: 15px;
  border-radius: 40px;
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  height: 330px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Date = styled.span`
  display: flex;
  justify-content: center;
  margin: 10px;
  gap: 15px;
`;

const Destination = styled.p`
  text-align: center;
  border-bottom: 1px solid var(--color-white);
  padding: 10px;
`;

const Notes = styled.p`
  padding-top: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;
