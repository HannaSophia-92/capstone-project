import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import React from 'react';

export default function PastTripNotes({ note, onDelete, image }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <ListEntry>
        <p>{note}</p>
        <UploadedImage src={image} alt=""></UploadedImage>
        <DeleteIcon>
          <Delete onClick={() => setIsVisible(!isVisible)}>
            <FiTrash size={20} />
          </Delete>
        </DeleteIcon>
      </ListEntry>
      {isVisible && (
        <Modal onDelete={handleDelete} onKeep={() => setIsVisible(!isVisible)}>
          Are you sure you want to delete this note?
        </Modal>
      )}
    </>
  );

  function handleDelete() {
    onDelete();
    setIsVisible(!isVisible);
  }
}

const ListEntry = styled.li`
  display: flex;
  flex-direction: column;
  word-break: break-all;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  min-height: 110px;
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  position: relative;
  box-shadow: var(--box-shadow);
`;

const Delete = styled.button`
  background: transparent;
  border: none;
  color: var(--color-white);
  position: absolute;
  bottom: 10px;
  right: 25px;
  cursor: pointer;

  &:hover {
    color: #ffcb74;
  }
`;

const UploadedImage = styled.img`
  width: 100%;
  margin: 10px 0;
`;

const DeleteIcon = styled.span`
  margin-top: 15px;
`;
