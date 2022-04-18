import styled from 'styled-components';
import { FiTrash as Delete } from 'react-icons/fi';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import React from 'react';
import Button from '../Button/Button';

export default function PastTripNotes({ note, onDelete, image, _id }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <ListEntry>
        <p>{note}</p>
        <UploadedImage src={image} alt=""></UploadedImage>
        <Button variant="delete" onClick={() => setIsVisible(!isVisible)}>
          <DeleteIcon size={20} />
        </Button>
      </ListEntry>
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
  right: 16px;
`;
