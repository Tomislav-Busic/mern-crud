import { create } from "zustand";
import axios from "axios";

export const noteStore = create((set) => ({
  notes: null,

  fetchNotes: async () => {
    // Fetch the notes
    const res = await axios.get("http://localhost:3000/notes");
    // Set to state
    set({ notes: res.data.notes });
  },
}));
