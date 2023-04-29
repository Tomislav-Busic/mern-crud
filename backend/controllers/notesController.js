const Note = require("../models/note");

const getAllNotes = async (req, res) => {
  // Find the notes
  const notes = await Note.find({ user: req.user._id });

  // Respond with them (if the key and the value match => "notes")
  res.status(200).json({ notes });
};

const getNoteById = async (req, res) => {
  // Get id off the url
  const noteId = req.params.id;
  // Find the note using that id
  const note = await Note.findOne({ _id: noteId, user: req.user._id });
  // Respond with the note
  res.status(200).json({ note });
};

const createNewNote = async (req, res) => {
  // Get the sent in data off request body
  const { title, body } = req.body;

  // Create a note with it
  const note = await Note.create({
    title,
    body,
    user: req.user._id,
  });

  // respond with the new note
  res.status(201).json({ note });
};

const updateNote = async (req, res) => {
  // Get the id off the url
  const noteId = req.params.id;

  // Get the data off the req body
  const { title, body } = req.body;

  // Find and update the record
  await Note.findOneAndUpdate(
    { _id: noteId, user: req.user._id },
    {
      title,
      body,
    }
  );

  // Find updated note
  const updatedNote = await Note.findById(noteId);

  // Respond with it
  res.status(200).json({ note: updatedNote });
};

const deleteNote = async (req, res) => {
  // Get the id off the url
  const noteId = req.params.id;

  // Delete the record
  await Note.findByIdAndDelete(noteId);

  // Respond with id from the note
  res.status(200).json({ note: `Deleted note id ${noteId}` });
};

module.exports = {
  getAllNotes,
  createNewNote,
  updateNote,
  deleteNote,
  getNoteById,
};
