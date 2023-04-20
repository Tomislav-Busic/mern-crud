const Note = require("../models/note");

const getAllNotes = async (req, res) => {
  // Find the notes
  const notes = await Note.find();

  // Respond with them (if the key and the value match => "notes")
  res.status(200).json({ notes });
};

const getNoteById = async (req, res) => {
  // Get id off the url
  const noteId = req.params.id;
  // Find the note using that id
  const note = await Note.findById(noteId);
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
  });

  // respond with the new note
  res.status(200).json({ note });
};

const updateNote = async (req, res) => {
  // Get the id off the url
  const noteId = req.params.id;

  // Get the data off the req body
  const title = req.body.title;
  const body = req.body.body;

  // Find and update the record
  await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });

  // Find updated note
  const updatedNote = await Note.findById(noteId);

  // Respond with it
  res.json({ note: updatedNote });
};

const deleteNote = async (req, res) => {
  // Get the id off the url
  const noteId = req.params.id;

  // Delete the record
  await Note.findByIdAndDelete(noteId);

  // Respond with id from the note
  res.json({ note: `Deleted note id ${noteId}` });
};

module.exports = {
  getAllNotes,
  createNewNote,
  updateNote,
  deleteNote,
  getNoteById,
};
