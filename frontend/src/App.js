import { useEffect } from "react";
import { noteStore } from "./stores/store";
import { Notes } from "./components/Notes";
import { UpdateForm } from "./components/UpdateForm";
import { CreateForm } from "./components/CreateForm";

function App() {
  const store = noteStore();

  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div>
      <Notes />
      <CreateForm />
      <UpdateForm />
    </div>
  );
}

export default App;
