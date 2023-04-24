import { useEffect } from "react";
import { noteStore } from "./stores/store";
import { Notes } from "./components/Notes";
import { UpdateForm } from "./components/UpdateForm";

function App() {
  const store = noteStore();

  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div>
      <Notes />
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
      <UpdateForm />
    </div>
  );
}

export default App;
