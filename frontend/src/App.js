import { useState, useEffect } from "react";
import axios from "axios";
import { noteStore } from "./stores/store";

function App() {
  const store = noteStore();

  useEffect(() => {
    store.fetchNotes();
  }, []);

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
      <div>
        <h2 style={{ textAlign: "center" }}>Create note</h2>
        <form
          onSubmit={store.createNote}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            name="title"
            value={store.createForm.title}
            onChange={store.updateCreateFormField}
          />
          <textarea
            name="body"
            value={store.createForm.body}
            onChange={store.updateCreateFormField}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Update note</h2>
        <form
          onSubmit={store.onSubmitUpdate}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            name="title"
            value={store.updateForm.title}
            onChange={store.onChangeUpdate}
          />
          <textarea
            name="body"
            value={store.updateForm.body}
            onChange={store.onChangeUpdate}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
