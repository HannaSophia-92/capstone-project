import pastTripList from '../../data';
import styled from 'styled-components';
import PastTripCard from '../PastTripCard/PastTripCard';
import { useState } from 'react';
import PastTripForm from '../PastTripForm/PastTripForm';
import PastTripNotes from '../PastTripNotes/PastTripNotes';
import { MdKeyboardBackspace } from 'react-icons/md';

export default function PastTripList({ notes, onHandleNewNote, onDelete }) {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      {isActive && (
        <PastTripLists role="list" aria-label="past-trips">
          {pastTripList.map(({ country, city, _id, image }) => {
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
        </PastTripLists>
      )}
      {!isActive && (
        <GoBackButton onClick={() => handleCardToggle()}>
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
        notes.map(({ note, _id }) => {
          return (
            <PastTripNotes
              key={_id}
              note={note}
              onDelete={() => onDelete(_id)}
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
  color: #2f2f2f;
  padding: 10px 15px 0 15px;
`;

const PastTripLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 20px;
`;
