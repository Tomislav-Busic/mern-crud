import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    // Fetch the notes
    const res = await axios.get("http://localhost:3000/notes");
    // Set to state
    console.log(res);
    setNotes(res.data.notes);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {notes.map((note) => (
        <h2 key={note._id}>{note.title}</h2>
      ))}
    </div>
  );
}

export default App;
