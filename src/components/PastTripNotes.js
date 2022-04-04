import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi';

export default function PastTripNotes({ notes, onDeleteNote }) {
  return (
    <ul>
      {notes.map(({ note, _id }) => {
        return (
          <ListEntries key={_id}>
            <p>{note}</p>
            <Delete onClick={() => onDeleteNote(_id)}>
              <FiTrash />
            </Delete>
          </ListEntries>
        );
      })}
    </ul>
  );
}

const ListEntries = styled.li`
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
