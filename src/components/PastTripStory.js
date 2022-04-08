import styled from 'styled-components';
import dayjs from 'dayjs';
import React from 'react';

export default function PastTripStory({
  startDate,
  endDate,
  destination,
  textNotes,
}) {
  return (
    <React.Fragment>
      <Card>
        <Date>
          {dayjs(startDate).format('DD-MM-YY')} <span> to </span>
          {dayjs(endDate).format('DD-MM-YY')}
        </Date>
        <Destination>{destination}</Destination>
        <Notes>{textNotes}</Notes>
      </Card>
    </React.Fragment>
  );
}

const Card = styled.li`
  padding: 15px;
  margin: 10px 0;
  border-radius: 40px;
  background-color: #2f2f2f;
  color: #f6f6f6;
  height: 330px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Date = styled.span`
  display: flex;
  justify-content: center;
  margin: 10px;
  gap: 15px;
`;

const Destination = styled.p`
  text-align: center;
  border-bottom: 1px solid #f6f6f6;
  padding: 10px;
`;

const Notes = styled.p`
  padding-top: 15px;
`;
