import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import dayjs from 'dayjs';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { FaRegCheckSquare } from 'react-icons/fa';

export default function FutureTripCard({
  onDelete,
  startDate,
  endDate,
  destination,
  notes,
  onFinishTrip,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Card>
        <Date>
          {dayjs(startDate).format('DD-MM-YY')} <span> to </span>
          {dayjs(endDate).format('DD-MM-YY')}
        </Date>
        <Destination>{destination}</Destination>
        <Notes>{notes}</Notes>
        <Done
          onClick={() => onFinishTrip(startDate, endDate, destination, notes)}
          aria-labelledby="Finish your trip"
        >
          <FaRegCheckSquare size={25} />
        </Done>
        <Delete onClick={() => setVisible(!visible)}>
          <FiTrash size={25} />
          <ScreenReaderOnly>Delete Card</ScreenReaderOnly>
        </Delete>
      </Card>
      {visible && (
        <Modal onDelete={onDelete} onKeep={() => setVisible(!visible)} />
      )}
    </>
  );
}

const Card = styled.article`
  padding: 15px;
  margin: 20px;
  border-radius: 40px;
  background-color: #2f2f2f;
  color: #f6f6f6;
  height: 300px;
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

const Delete = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  color: #f6f6f6;
  bottom: 10px;
  right: 60px;

  &:hover {
    color: #ffcb74;
  }
`;

const Done = styled.button`
  background: transparent;
  border: none;
  color: #f6f6f6;
  position: absolute;
  bottom: 10px;
  right: 25px;
`;
