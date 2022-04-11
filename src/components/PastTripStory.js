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
  savePicture,
  picture,
}) {
  const [isVisible, setIsVisible] = useState(false);
  // const [picture, setPicture] = useState('');

  console.log(picture);

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
          <UploadButtonWrapper>
            <Button
              type="button"
              aria-labelledby="Upload image"
              onClick={() => setIsVisible(!isVisible)}
            >
              Upload image
            </Button>
          </UploadButtonWrapper>
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
    savePicture(picture, _id);
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
  min-height: 330px;
  box-shadow: var(--box-shadow);
  position: relative;
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
`;

const UploadedImage = styled.img`
  width: 100%;
  margin: 10px 0;
  border-radius: 8px;
`;

const UploadButtonWrapper = styled.div`
  border: 1px dashed rgba(220, 220, 220, 0.3);
  border-radius: 16px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
