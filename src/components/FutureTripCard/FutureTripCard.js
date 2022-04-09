import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi';
import Modal from '../Modal/Modal';
import SaveModal from '../Modal/SaveModal';
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
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <Form
          onSubmit={handleSubmit}
          autoComplete="off"
          aria-labelledby="edit-form"
        >
          <h2 id="edit-form">Edit notes</h2>
          <div>
            <Label htmlFor="destination">Destination:</Label>
            <Input type="text" id="destination" defaultValue={destination} />
          </div>
          <InputDateWrapper>
            <div>
              <Label htmlFor="startDate">Start:</Label>
              <InputDate type="date" id="startDate" defaultValue={startDate} />
            </div>
            <div>
              <Label htmlFor="endDate">End:</Label>
              <InputDate type="date" id="endDate" defaultValue={endDate} />
            </div>
          </InputDateWrapper>

          <div>
            <Label htmlFor="textNotes">Enter notes:</Label>
            <Textarea
              type="text"
              id="textNotes"
              defaultValue={textNotes}
              maxLength="500"
              rows="3"
            />
          </div>
          <Button variant="add" category="Save changes" type="submit">
            Submit changes
          </Button>
        </Form>
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
            onClick={() => setIsOpen(!isOpen)}
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
            onClick={() => setIsVisible(!isVisible)}
          >
            <FiTrash size={25} />
            <ScreenReaderOnly>Delete Card</ScreenReaderOnly>
          </Button>
        </Card>
      )}
      {isVisible && (
        <Modal onDelete={onDelete} onKeep={() => setIsVisible(!isVisible)}>
          Are you sure you want to delete this trip?
        </Modal>
      )}
      {isOpen && (
        <SaveModal
          onKeep={() => setIsOpen(!isOpen)}
          onFinishTrip={() =>
            onFinishTrip(startDate, endDate, destination, textNotes, _id)
          }
        >
          Back home? Your trip will be saved to your history
        </SaveModal>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-top: 10px;
`;

const InputDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const InputDate = styled.input`
  color: gray;
  margin-top: 12px;
`;

const Textarea = styled.textarea`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
`;
