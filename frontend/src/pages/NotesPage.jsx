import { useEffect } from "react";
import { noteStore } from "../stores/store";

import { Notes } from "../components/Notes";
import { CreateForm } from "../components/CreateForm";
import { UpdateForm } from "../components/UpdateForm";

export const NotesPage = () => {
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
};
