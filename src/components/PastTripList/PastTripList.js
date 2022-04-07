import pastTripList from '../../data';
import styled from 'styled-components';
import PastTripCard from '../PastTripCard/PastTripCard';
import { useState } from 'react';
import PastTripForm from '../PastTripForm/PastTripForm';
import PastTripNotes from '../PastTripNotes/PastTripNotes';
import { MdKeyboardBackspace } from 'react-icons/md';
import FutureTripCard from '../FutureTripCard/FutureTripCard';

export default function PastTripList({
  notes,
  onHandleNewNote,
  onDelete,
  history,
  destination,
  startDate,
  endDate,
  textNotes,
}) {
  const [isActive, setIsActive] = useState(true);

  console.log(history);

  return (
    <>
      {isActive && (
        <>
          <Card role="list" aria-label="past-trips">
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
          </Card>
          <Card>
            {history.map(
              ({ destination, startDate, endDate, textNotes, _id }) => (
                <FutureTripCard
                  destination={destination}
                  startDate={startDate}
                  endDate={endDate}
                  textNotes={textNotes}
                  _id={_id}
                />
              )
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

const Card = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 20px;
`;
