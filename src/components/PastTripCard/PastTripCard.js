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
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
  onViewPort,
  coordinates,
}) {
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [notesVisible, setNotesVisible] = useState(true);

  return (
    <>
      {notesVisible && (
        <Card>
          <Date>
            {dayjs(startDate).format('DD-MM-YY')} <span> to </span>
            {dayjs(endDate).format('DD-MM-YY')}
          </Date>
          <Destination>
            {destination}
            <StyledLink
              to="/mapPage"
              aria-label="show-on-map"
              onClick={() => onViewPort(coordinates)}
            >
              <LocationIcon size={25} />
              <ScreenReaderOnly>show on map</ScreenReaderOnly>
            </StyledLink>
          </Destination>
          <Notes>{textNotes}</Notes>
          {!picture ? (
            <UploadButtonWrapper>
              <Button
                type="button"
                aria-labelledby="Upload image"
                onClick={() => setImageModalVisible(!imageModalVisible)}
              >
                Upload image
              </Button>
            </UploadButtonWrapper>
          ) : (
            <UploadedImage src={picture} alt="" />
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
      {imageModalVisible && (
        <UploadModal
          onCancel={() => setImageModalVisible(!imageModalVisible)}
          moveImage={handleImage}
        >
          Save Image?
        </UploadModal>
      )}
      {!notesVisible && (
        <GoBackButton
          aria-labelledby="Return to home page"
          onClick={() => handleCardToggle()}
        >
          <MdKeyboardBackspace size={30} />
        </GoBackButton>
      )}
      {!notesVisible && (
        <>
          <PastTripForm
            onHandleNewNote={onHandleNewNote}
            onClick={() => handleCardToggle()}
            _id={_id}
          />
        </>
      )}
      {!notesVisible &&
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
    setImageModalVisible(!imageModalVisible);
  }
  function handleCardToggle() {
    setNotesVisible(!notesVisible);
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
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom: 1px solid var(--color-white);
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

const StyledLink = styled(Link)`
  color: var(--color-yellow);
  text-decoration: none;
  text-align: center;
  margin: 5px;
  position: relative;
`;

const LocationIcon = styled(MdLocationOn)`
  position: relative;
  bottom: -3px;
  margin: 0 5px;
`;
