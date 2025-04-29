//notizen anzeigen lassen
let notes = ['Notiz 1', 'Notiz 2', 'Notiz 3'];
let trashNotes = [];
let archivNotes = [];

let allNotes = {
    'notes': ['Notiz 1', 'Notiz 2', 'Notiz 3'],
    'trashNotes': [],
    'archivNotes': [],
}
    
function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value.trim();
    if (!noteInput) {
        alert('Bitte was eingeben');
    return
    }
    allNotes.notes.push(noteInput);
    renderNotes();
    noteInputRef.value = "";
}

document.getElementById('note_input').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addNote();
    }
});

function moveNote(indexNote, startKey, destinationKey) {
    let trashNote = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(trashNote[0]);

    renderNotes();
    renderTrashNotes();
    renderArchivNotes();
}

function deleteArchivNote(indexArchivNote) {
    allNotes.archivNotes.splice(indexArchivNote, 1);
    renderArchivNotes();
}

function renderNotes() {
    localStorage.setItem("lastname", "test");
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    
    for (let indexNotes = 0; indexNotes < allNotes.notes.length; indexNotes++) {
        contentRef.innerHTML += getNotTemplate(indexNotes);   
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNotTemplate(indexTrashNote);
    }
}

function renderArchivNotes() {
    let archivContentRef = document.getElementById('archiv_content');
    archivContentRef.innerHTML = "";

    for (let indexArchivNote = 0; indexArchivNote < allNotes.archivNotes.length; indexArchivNote++) {
        archivContentRef.innerHTML += getArchivNotTemplate(indexArchivNote);
    }
}






