import styled from 'styled-components';
import { useState } from 'react';
import PastTripForm from '../PastTripForm/PastTripForm';
import PastTripNotes from '../PastTripNotes/PastTripNotes';
import { MdKeyboardBackspace } from 'react-icons/md';
import PastTripStory from '../PastTripCard/PastTripStory';

export default function PastTripList({
  notes,
  onHandleNewNote,
  onDelete,
  history,
  savePicture,
}) {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      {isActive && (
        <>
          <Card>
            {history.map(
              ({
                destination,
                startDate,
                endDate,
                textNotes,
                _id,
                picture,
              }) => {
                return (
                  <PastTripStory
                    destination={destination}
                    startDate={startDate}
                    endDate={endDate}
                    textNotes={textNotes}
                    _id={_id}
                    key={_id}
                    handleCardToggle={handleCardToggle}
                    picture={picture}
                    savePicture={savePicture}
                  />
                );
              }
            )}
          </Card>
        </>
      )}
      {!isActive && (
        <GoBackButton
          aria-labelledby="Go back"
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
          />
        </>
      )}
      {!isActive &&
        notes.map(({ note, _id, image }) => {
          return (
            <PastTripNotes
              key={_id}
              note={note}
              onDelete={() => onDelete(_id)}
              image={image}
            />
          );
        })}
    </>
  );

  function handleCardToggle() {
    setIsActive(!isActive);
  }
}

const GoBackButton = styled.button`
  border: none;
  background: transparent;
  font-size: 20px;
  color: var(--color-dark-gray);
  padding: 10px 15px 0 15px;
`;

const Card = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 20px;
`;
