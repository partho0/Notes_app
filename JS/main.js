import NotesView from "./NotesView.js"
import NotesAPI from "./NotesAPI.js"

const app = document.getElementById("app");
const view = new NotesView(app, {
    onNoteAdd() {
        console.log("Let's go for a note");
    },
    onNoteEdit(newTitle, newBody) {
        console.log(newTitle);
        console.log(newBody)
    }

});

view.updateNoteList(NotesAPI.getAllNotes());