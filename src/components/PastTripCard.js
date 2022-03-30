import pastTripList from '../data';
import styled from 'styled-components';
import PastTripList from './PastTripList';
import { useState } from 'react';
import PastTripForm from './PastTripForm';
import PastTripsNotesList from './PastTripNotesList';

import { BsArrowLeftCircleFill } from 'react-icons/bs';

export default function PastTripCard({ notes, onHandleNewNote }) {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      {isActive && (
        <PastTripCards role="list" aria-label="past-trips">
          {pastTripList.map(({ country, city, _id, image }) => {
            return (
              <PastTripList
                image={image}
                country={country}
                city={city}
                key={_id}
                handleCardToggle={handleCardToggle}
              />
            );
          })}
        </PastTripCards>
      )}
      {!isActive && (
        <GoBackButton onClick={() => handleCardToggle()}>
          <BsArrowLeftCircleFill />
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
      {!isActive && <PastTripsNotesList notes={notes} />}
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
  margin: 0 15px;
`;

const PastTripCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 20px;
`;
