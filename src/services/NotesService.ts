import { notesMock } from "@/fixtures/NotesMock";
import { Note } from "@/models/Note";

export class NotesService {
    public static getNotes(amount = 50): Promise<Note[]> {
        return Promise.resolve(notesMock.filter((n, i) => i < amount));
    }
}