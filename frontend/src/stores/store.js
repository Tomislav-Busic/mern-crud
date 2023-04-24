import { create } from "zustand";
import axios from "axios";

export const noteStore = create((set) => ({
  notes: null,

  createForm: {
    title: "",
    body: "",
  },

  updateForm: {
    _id: null,
    title: "",
    body: "",
  },

  fetchNotes: async () => {
    // Fetch the notes
    const res = await axios.get("http://localhost:3000/notes");
    // Set to state
    set({ notes: res.data.notes });
  },
  updateCreateFormField: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      createForm: {
        ...state.createForm,
        [name]: value,
      },
    }));
  },
  createNote: async (e) => {
    e.preventDefault();

    // Create note
    const { createForm, notes } = noteStore.getState();
    const res = await axios.post("http://localhost:3000/notes", createForm);

    // Update state
    set({
      notes: [...notes, res.data.note],
      createForm: {
        title: "",
        body: "",
      },
    });
  },
  deleteNote: async (id) => {
    // Delete note
    const res = await axios.delete(`http://localhost:3000/notes/${id}`);
    console.log(res.data.note);

    const { notes } = noteStore.getState();
    const newNotes = notes.filter((note) => note._id !== id);

    set({ notes: newNotes });
  },
  onChangeUpdate: (e) => {
    const { name, value } = e.target;

    set((state) => ({
      updateForm: {
        ...state.updateForm,
        [name]: value,
      },
    }));
  },
  toggleUpdate: (note) => {
    const { _id, title, body } = note;
    set({
      updateForm: { _id, title, body },
    });
  },
}));
