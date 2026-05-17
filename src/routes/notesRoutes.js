import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

const notesRoute = Router();

notesRoute.get('/notes', getAllNotes);
notesRoute.get('/notes/:noteId', getNoteById);
notesRoute.post('/notes', createNote);
notesRoute.delete('/notes/:noteId', deleteNote);
notesRoute.patch('/notes/:noteId', updateNote);

export default notesRoute;
