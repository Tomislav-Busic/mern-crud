import { useState, useEffect } from "react";
import axios from "axios";
import { noteStore } from "./stores/store";

function App() {
  const store = noteStore();
  const [notes, setNotes] = useState(null);
  const [data, setData] = useState({
    title: "",
    body: "",
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    body: "",
  });

  const { title, body } = data;

  useEffect(() => {
    store.fetchNotes();
  }, []);


  // CREATE
  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitCreate = async (e) => {
    e.preventDefault();

    // Create note
    const res = await axios.post("http://localhost:3000/notes", data);

    // Update state
    setNotes([...notes, res.data.note]);

    // Clear form state
    setData({ title: "", body: "" });
  };

  // DELETE
  const deleteNote = async (id) => {
    // Delete note
    const res = await axios.delete(`http://localhost:3000/notes/${id}`);

    console.log(res);

    const newNotes = notes.filter((note) => note._id !== id);

    setNotes(newNotes);
  };

  // UPDATE
  const onSubmitUpdate = async (e) => {
    e.preventDefault();
    const { _id, title, body } = updateForm;

    const res = await axios.put(`http://localhost:3000/notes/${_id}`, {
      title,
      body,
    });

    // Update state
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === updateForm._id;
    });
    newNotes[noteIndex] = res.data.note;

    setNotes(newNotes);

    // Clear state
    setUpdateForm({
      _id: null,
      title: "",
      body: "",
    });
  };

  const onChangeUpdate = (e) => {
    const { name, value } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const toggleUpdate = (note) => {
    setUpdateForm({
      _id: note._id,
      title: note.title,
      body: note.body,
    });
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {store.notes &&
        store.notes.map((note) => {
          return (
            <div key={note._id}>
              <h2>{note.title}</h2>
              <p>Body: {note.body}</p>
              <button onClick={() => deleteNote(note._id)}>
                Delete {note.title}
              </button>
              <button onClick={() => toggleUpdate(note)}>Update</button>
            </div>
          );
        })}
      <div>
        <h2 style={{ textAlign: "center" }}>Create note</h2>
        <form
          onSubmit={onSubmitCreate}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input name="title" value={title} onChange={onChange} />
          <textarea name="body" value={body} onChange={onChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Update note</h2>
        <form
          onSubmit={onSubmitUpdate}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            name="title"
            value={updateForm.title}
            onChange={onChangeUpdate}
          />
          <textarea
            name="body"
            value={updateForm.body}
            onChange={onChangeUpdate}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
