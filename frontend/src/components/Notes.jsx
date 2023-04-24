import React from "react";
import { noteStore } from "../stores/store";

export const Notes = () => {
  const store = noteStore();
  return (
    <div>
      <h1>Hello World!</h1>
      {store.notes &&
        store.notes.map((note) => {
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
        })}
    </div>
  );
};
