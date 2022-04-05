import pastTripList from '../data';
import styled from 'styled-components';
import PastTripCard from './PastTripCard';
import { useState } from 'react';
import PastTripForm from './PastTripForm';
import PastTripNotes from './PastTripNotes';
import { MdKeyboardBackspace } from 'react-icons/md';

export default function PastTripList({
  notes,
  onHandleNewNote,
  onDelete,
  _id,
}) {
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
      {!isActive && (
        <PastTripNotes notes={notes} _id={_id} onDelete={onDelete} />
      )}
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
