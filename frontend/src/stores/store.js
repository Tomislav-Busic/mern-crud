import { create } from "zustand";
import axios from "axios";

const noteStore = create((set) => ({
  notes: null,

  fetchNotes: async () => {
    // Fetch the notes
    const res = await axios.get("http://localhost:3000/notes");
    // Set to state
    set(res.data.notes);
  },
}));

export default noteStore;