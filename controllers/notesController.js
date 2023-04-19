const getAllNotes = async (req, res) => {
  // Find the notes
  const notes = await Note.find();

  // Respond with them
  res.json({ notes: notes });
};

const getNoteById = async (req, res) => {
  // Get id off the url
  const noteId = req.params.id;
  // Find the note using that id
  const note = await Note.findById(noteId);
  // Respond with the note
  res.json({ note: note });
};

const createNewNote = async (req, res) => {
  // Get the sent in data off request body
  const title = req.body.title;
  const body = req.body.body;

  // Create a note with it
  const note = await Note.create({
    title: title,
    body: body,
  });

  // respond with the new note
  res.json({ note: note });
};