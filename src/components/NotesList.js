export default function NotesList({ notes }) {
  return (
    <ul>
      {notes.map(({ note, id }) => {
        return <li key={id}>{note}</li>;
      })}
    </ul>
  );
}
