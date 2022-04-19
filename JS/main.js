import NotesView from "./NotesView.js"
import NotesAPI from "./NotesAPI.js"

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd() {
        console.log("Let's go for a note");
    },
    onNoteSelect(id) {
        console.log("Note Selected:" + id);
    },
    onNoteDelete(id) {
        console.log("Note Deleted:" + id);
    },
    onNoteEdit(newTitle, newBody) {
        console.log(newTitle);
        console.log(newBody)
    }

});

const notes = NotesAPI.getAllNotes();

view.updateNoteList(NotesAPI.getAllNotes());
view.updateActiveNote(notes[0]);