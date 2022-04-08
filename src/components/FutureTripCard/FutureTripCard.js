import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import dayjs from 'dayjs';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { FaRegCheckSquare } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import Button from '../Button/Button';

export default function FutureTripCard({
  onDelete,
  startDate,
  endDate,
  destination,
  textNotes,
  onFinishTrip,
  _id,
  onEdit,
}) {
  const [visible, setVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  console.log(_id);
  return (
    <>
      {isEditing ? (
        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label htmlFor="startDate">edit start date</label>
            <input type="date" id="startDate" defaultValue={startDate} />
          </div>
          <div>
            <label htmlFor="endDate">edit end date</label>
            <input type="date" id="endDate" defaultValue={endDate} />
          </div>
          <div>
            <label htmlFor="destination">edit destination</label>
            <input type="text" id="destination" defaultValue={destination} />
          </div>
          <div>
            <label htmlFor="textNotes">edit textNotes</label>
            <input type="text" id="textNotes" defaultValue={textNotes} />
          </div>
          <Button variant="add" category="Save changes" type="submit">
            Submit changes
          </Button>
        </form>
      ) : (
        <Card>
          <Date>
            {dayjs(startDate).format('DD-MM-YY')} <span> to </span>
            {dayjs(endDate).format('DD-MM-YY')}
          </Date>
          <Destination>{destination}</Destination>
          <Notes>{textNotes}</Notes>
          <Button
            variant="done"
            type="button"
            aria-labelledby="Finish your trip"
            onClick={() =>
              onFinishTrip(startDate, endDate, destination, textNotes, _id)
            }
          >
            <FaRegCheckSquare size={25} />
            <ScreenReaderOnly>Finish your trip</ScreenReaderOnly>
          </Button>
          <Button
            variant="edit"
            type="button"
            aria-labelledby="Edit your card"
            onClick={() => setIsEditing(!isEditing)}
          >
            <FaEdit size={25} />
            <ScreenReaderOnly>Edit Card</ScreenReaderOnly>
          </Button>
          <Button
            variant="delete"
            type="button"
            aria-labelledby="Delete your trip"
            onClick={() => setVisible(!visible)}
          >
            <FiTrash size={25} />
            <ScreenReaderOnly>Delete Card</ScreenReaderOnly>
          </Button>
        </Card>
      )}
      {visible && (
        <Modal onDelete={onDelete} onKeep={() => setVisible(!visible)}>
          Are you sure you want to delete this trip?
        </Modal>
      )}
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const { startDate, endDate, destination, textNotes } =
      event.target.elements;
    onEdit({
      _id: _id,
      startDate: startDate.value,
      endDate: endDate.value,
      destination: destination.value,
      textNotes: textNotes.value,
    });
    console.log(_id);
    setIsEditing(false);
  }
}

const Card = styled.article`
  padding: 15px;
  margin: 20px 0;
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

const Done = styled.button`
  background: transparent;
  border: none;
  color: #f6f6f6;
  position: absolute;
  bottom: 9px;
  right: 25px;

  &:hover {
    color: #ffcb74;
  }
`;
