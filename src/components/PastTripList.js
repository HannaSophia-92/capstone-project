import pastTripList from '../data';
import styled from 'styled-components';
import PastTripCard from './PastTripCard';
import { useState } from 'react';
import PastTripForm from './PastTripForm';
import PastTripNotes from './PastTripNotes';

import { BsArrowLeftCircleFill } from 'react-icons/bs';

export default function PastTripList({ notes, onHandleNewNote }) {
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
              />
            );
          })}
        </PastTripLists>
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
      {!isActive && <PastTripNotes notes={notes} />}
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

const PastTripLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 20px;
`;
