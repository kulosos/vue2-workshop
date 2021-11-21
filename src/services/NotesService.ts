import { notesMock } from "@/fixtures/NotesMock";
import { Note } from "@/models/Note";

export class NotesService {
    public static getNotes(): Promise<Note[]> {
        return Promise.resolve(notesMock);
    }
}