import React from "react";

export const Note = (note) => {
  return (
    <div key={note._id}>
      <h2>{note.title}</h2>
      <p>Body: {note.body}</p>
      <button onClick={() => store.deleteNote(note._id)}>
        Delete {note.title}
      </button>
      <button onClick={() => store.toggleUpdate(note)}>Update</button>
    </div>
  );
};
