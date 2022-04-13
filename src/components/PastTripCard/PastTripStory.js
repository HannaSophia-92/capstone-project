import styled from 'styled-components';
import dayjs from 'dayjs';
import Button from '../Button/Button';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { MdOutlineNoteAlt } from 'react-icons/md';
import { useState } from 'react';
import UploadModal from '../Modal/UploadModal';
import PastTripForm from '../PastTripForm/PastTripForm';
import PastTripNotes from '../PastTripNotes/PastTripNotes';
import { MdKeyboardBackspace } from 'react-icons/md';

export default function PastTripStory({
  startDate,
  endDate,
  destination,
  textNotes,
  _id,
  savePicture,
  picture,
  onHandleNewNote,
  onDelete,
  notes,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      {isActive && (
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
      )}
      {isVisible && (
        <UploadModal
          onCancel={() => setIsVisible(!isVisible)}
          moveImage={handleImage}
        >
          Save Image?
        </UploadModal>
      )}
      {!isActive && (
        <GoBackButton
          aria-labelledby="Return to home page"
          onClick={() => handleCardToggle()}
        >
          <MdKeyboardBackspace size={30} />
        </GoBackButton>
      )}
      {!isActive && (
        <>
          <PastTripForm
            onHandleNewNote={onHandleNewNote}
            onClick={() => handleCardToggle()}
            _id={_id}
          />
        </>
      )}
      {!isActive &&
        notes?.map(({ note, _id, image }) => {
          return (
            <PastTripNotes
              key={_id}
              note={note}
              onDelete={onDelete}
              image={image}
              _id={_id}
            />
          );
        })}
    </>
  );

  function handleImage(picture) {
    savePicture(picture, _id);
    setIsVisible(!isVisible);
  }
  function handleCardToggle() {
    setIsActive(!isActive);
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

const GoBackButton = styled.button`
  display: flex;
  justify-content: flex-start;
  border: none;
  background: transparent;
  font-size: 20px;
  color: var(--color-dark-gray);
`;
