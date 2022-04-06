import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi';
import Modal from './Modal';
import { useState } from 'react';
import React from 'react';

export default function PastTripNotes({ note, onDelete }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <ListEntry>
        <p>{note}</p>
        <Delete onClick={() => setIsVisible(!isVisible)}>
          <FiTrash />
        </Delete>
      </ListEntry>
      {isVisible && (
        <Modal
          onDelete={handleDelete}
          onKeep={() => setIsVisible(!isVisible)}
        />
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
  margin: 15px;
  padding: 20px;
  border-radius: 20px;
  min-height: 110px;
  background-color: #2f2f2f;
  color: #f6f6f6;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;

const Delete = styled.button`
  background: transparent;
  border: none;
  color: #f6f6f6;
  position: absolute;
  bottom: 10px;
  right: 25px;
  cursor: pointer;

  &:hover {
    color: #ffcb74;
  }
`;
