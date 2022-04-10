import pastTripList from '../../data';
import styled from 'styled-components';
import PastTripCard from '../PastTripCard/PastTripCard';
import { useState } from 'react';
import PastTripForm from '../PastTripForm/PastTripForm';
import PastTripNotes from '../PastTripNotes/PastTripNotes';
import { MdKeyboardBackspace } from 'react-icons/md';
import PastTripStory from '../PastTripStory';

export default function PastTripList({
  notes,
  onHandleNewNote,
  onDelete,
  history,
}) {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      {isActive && (
        <>
          {/* <Card role="list" aria-label="past-trips">
            {pastTripList?.map(({ country, city, _id, image }) => {
              return (
                <PastTripCard
                  image={image}
                  country={country}
                  city={city}
                  key={_id}
                  handleCardToggle={handleCardToggle}
                  _id={_id}
                />
              );
            })}
          </Card> */}
          <Card>
            {history.map(
              ({
                destination,
                startDate,
                endDate,
                textNotes,
                _id,
                image,
                upload,
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
                    image={image}
                    upload={() => upload()}
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
