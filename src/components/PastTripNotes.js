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
  border-radius: 40px;
  min-height: 100px;
  background-color: #2f2f2f;
  color: #f6f6f6;
  position: relative;
`;

const Delete = styled.div`
  position: absolute;
  bottom: 10px;
  right: 25px;

  &:hover {
    color: red;
  }
`;
