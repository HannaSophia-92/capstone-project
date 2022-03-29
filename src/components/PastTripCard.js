import pastTripList from '../data';
import styled from 'styled-components';
import PastTripList from './PastTripList';
import { useState } from 'react';
import PastTripNotes from './PastTripNotes';
import NotesList from './NotesList';

export default function PastTripCard({ notes, onHandleNewNote }) {
  const [active, setActive] = useState(true);

  return (
    <>
      {active && (
        <PastTripCards
          onClick={() => handleCardToggle()}
          role="list"
          aria-label="past-trip"
        >
          {pastTripList.map(({ country, city, _id, image }) => {
            return (
              <PastTripList
                image={image}
                country={country}
                city={city}
                key={_id}
              />
            );
          })}
        </PastTripCards>
      )}
      {!active && (
        <PastTripNotes
          onHandleNewNote={onHandleNewNote}
          onClick={() => handleCardToggle()}
        />
      )}
      {!active && <NotesList notes={notes} />}
    </>
  );

  function handleCardToggle() {
    setActive(!active);
  }
}

const PastTripCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 20px;
`;
