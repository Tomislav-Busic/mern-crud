import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState(null);
  const [data, setData] = useState({
    title: "",
    body: "",
  });

  const { title, body } = data;

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    // Fetch the notes
    const res = await axios.get("http://localhost:3000/notes");
    // Set to state
    setNotes(res.data.notes);
    console.log(res);
  };

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create note
    const res = await axios.post("http://localhost:3000/notes", data);

    // Update state
    setNotes([...notes, res.data.note]);

    // Clear form state
    setData({ title: "", body: "" });
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {notes &&
        notes.map((note) => {
          return (
            <div key={note._id}>
              <h2>{note.title}</h2>
            </div>
          );
        })}
      <div>
        <h2>Create note</h2>
        <form onSubmit={onSubmit}>
          <input name="title" value={title} onChange={onChange} />
          <textarea name="body" value={body} onChange={onChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
