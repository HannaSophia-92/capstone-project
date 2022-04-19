import styled from 'styled-components';
import { FiTrash as Delete } from 'react-icons/fi';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import React from 'react';
import Button from '../Button/Button';
import { FaEdit as Edit } from 'react-icons/fa';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';

export default function PastTripNotes({
  note,
  onDelete,
  image,
  _id,
  onEditNotes,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  console.log(_id);

  return (
    <>
      {isEditing ? (
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          aria-labelledby="edit-form"
        >
          <ScreenReaderOnly>
            <h2 id="edit-form">Edit notes</h2>
          </ScreenReaderOnly>

          <div>
            <label htmlFor="note">Things to remember:</label>
            <textarea type="text" id="note" defaultValue={note} />
          </div>

          <div>
            <Button variant="add" category="Save changes" type="submit">
              Submit changes
            </Button>
          </div>
        </form>
      ) : (
        <ListEntry>
          <p>{note}</p>
          <UploadedImage src={image} alt=""></UploadedImage>
          <Button
            variant="edit"
            type="button"
            aria-labelledby="Edit your card"
            onClick={() => setIsEditing(!isEditing)}
          >
            <EditIcon size={20} />
            <ScreenReaderOnly>Edit Card</ScreenReaderOnly>
          </Button>
          <Button variant="delete" onClick={() => setIsVisible(!isVisible)}>
            <DeleteIcon size={20} />
          </Button>
        </ListEntry>
      )}
      {isVisible && (
        <Modal
          onDelete={() => onDelete(_id)}
          onKeep={() => setIsVisible(!isVisible)}
        >
          Are you sure you want to delete this note?
        </Modal>
      )}
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const { note } = event.target.elements;
    onEditNotes({
      note: note.value,
      _id: _id,
    });
    setIsEditing(false);
  }
}

const ListEntry = styled.li`
  display: flex;
  flex-direction: column;
  word-break: break-all;
  padding: 16px;
  margin: 0 10px;
  border-radius: 20px;
  min-height: 110px;
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  position: relative;
  box-shadow: var(--box-shadow);
`;

const UploadedImage = styled.img`
  width: 100%;
  margin: 10px 0;
`;

const DeleteIcon = styled(Delete)`
  position: absolute;
  bottom: 10px;
  right: 45px;
`;

const EditIcon = styled(Edit)`
  position: absolute;
  bottom: 10px;
  right: 12px;
`;
