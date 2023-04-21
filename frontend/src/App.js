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
    setNotes(res.data.notes);
    console.log(res);
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
    </div>
  );
}

export default App;
