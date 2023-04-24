import React from "react";
import { noteStore } from "../stores/store";
import { Note } from "./Note";

export const Notes = () => {
  const store = noteStore();
  return (
    <div>
      <h1>Hello World!</h1>
      {store.notes &&
        store.notes.map((note) => {
          return <Note key={note._id} note={note} />;
        })}
    </div>
  );
};
