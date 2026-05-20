import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';
import {
  createNoteSchema,
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const notesRoute = Router();

notesRoute.get('/notes', celebrate(getAllNotesSchema), getAllNotes);
notesRoute.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
notesRoute.post('/notes', celebrate(createNoteSchema), createNote);
notesRoute.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);
notesRoute.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);

export default notesRoute;
