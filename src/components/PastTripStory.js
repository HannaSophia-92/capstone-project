import styled from 'styled-components';
import dayjs from 'dayjs';
import Button from './Button/Button';
import ScreenReaderOnly from './styledComponents/ScreenReaderOnly';
import { MdOutlineNoteAlt } from 'react-icons/md';
import { useState } from 'react';
import UploadModal from '../components/Modal/UploadModal';

export default function PastTripStory({
  startDate,
  endDate,
  destination,
  textNotes,
  handleCardToggle,
  _id,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [picture, setPicture] = useState('');

  return (
    <>
      <Card>
        <Date>
          {dayjs(startDate).format('DD-MM-YY')} <span> to </span>
          {dayjs(endDate).format('DD-MM-YY')}
        </Date>
        <Destination>{destination}</Destination>
        <Notes>{textNotes}</Notes>
        {!picture ? (
          <Button onClick={() => setIsVisible(!isVisible)}>Upload image</Button>
        ) : (
          <UploadedImage src={picture} alt=""></UploadedImage>
        )}
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
      {isVisible && (
        <UploadModal
          onCancel={() => setIsVisible(!isVisible)}
          moveImage={handleImage}
        >
          Save Image?
        </UploadModal>
      )}
    </>
  );

  function handleImage(picture) {
    setPicture(picture);
    setIsVisible(!isVisible);
  }
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
  box-shadow: var(--box-shadow);
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

const UploadedImage = styled.img`
  width: 100%;
  margin: 10px 0;
`;
