import React from "react";
import { noteStore } from "../stores/store";

export const Note = (note) => {
  const store = noteStore((store) => {
    return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
  });

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
