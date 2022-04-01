import styled from 'styled-components';

export default function PastTripNotes({ notes }) {
  return (
    <ul>
      {notes.map(({ note, id }) => {
        return <ListEntries key={id}>{note}</ListEntries>;
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
`;
