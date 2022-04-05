import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi';
import Modal from './Modal';
import { useState } from 'react';

export default function PastTripNotes({ notes, onDelete }) {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState('');

  return (
    <ul>
      {notes.map(({ note, _id }) => {
        return (
          <ListEntry key={_id}>
            <p>{note}</p>
            <Delete onClick={() => handleId(_id)}>
              <FiTrash />
            </Delete>
          </ListEntry>
        );
      })}
      {visible && (
        <Modal
          onDelete={() => handleDelete(id)}
          onKeep={() => setVisible(!visible)}
        />
      )}
    </ul>
  );

  function handleId(id) {
    setVisible(!visible);
    setId(id);
  }
  function handleDelete(_id) {
    onDelete(_id);
    setVisible(!visible);
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

const Delete = styled.span`
  position: absolute;
  bottom: 10px;
  right: 25px;
  cursor: pointer;

  &:hover {
    color: #ffcb74;
  }
`;
