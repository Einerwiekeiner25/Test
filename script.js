//notizen anzeigen lassen
let notes = ['Notiz 1', 'Notiz 2', 'Notiz 3'];
let trashNotes = [];
let archivNotes = [];

function renderNotes() {
    localStorage.setItem("lastname", "test");
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    
    for (let indexNotes = 0; indexNotes < notes.length; indexNotes++) {
        contentRef.innerHTML += getNotTemplate(indexNotes);   
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNotTemplate(indexTrashNote);
    }
}

function renderArchivNotes() {
    let archivContentRef = document.getElementById('archiv_content');
    archivContentRef.innerHTML = "";

    for (let indexArchivNote = 0; indexArchivNote < archivNotes.length; indexArchivNote++) {
        archivContentRef.innerHTML += getArchivNotTemplate(indexArchivNote);
    }
}


function getNotTemplate(indexNote) {
    return `<p> + ${notes[indexNote]} <button onclick="deleteNote(${indexNote})"> X</button> </p>`    
}

function getTrashNotTemplate(indexTrashNote) {
    return `<p> + ${trashNotes[indexTrashNote]} <button onclick="deleteTrashNote(${indexTrashNote})"> X</button> </p>`    
}

function getArchivNotTemplate(indexArchivNote) {
    return `<p> + ${archivNotes[indexArchivNote]} <button onclick="deleteArchivNote(${indexArchivNote})"> X</button> </p>`    
}

// notizen hinzufügen
function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value.trim();
    if (!noteInput) {
        alert('Bitte was eingeben');
    return
    }
    notes.push(noteInput);
    renderNotes();
    noteInputRef.value = "";
}

document.getElementById('note_input').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        addNote();
    }
});

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();
}

function deleteTrashNote(indexTrashNote) {
    let archivNote = trashNotes.splice(indexTrashNote, 1)[0];
    archivNotes.push(archivNote); 
    renderTrashNotes(); 
    renderArchivNotes();    
}

function deleteArchivNote(indexArchivNote) {
    archivNotes.splice(indexArchivNote, 1);
    renderArchivNotes();
}

//notizen archivi













function saveToLocalStorage() {
    localStorage.setItem("myData", JSON.stringify(notes));
}

function saveData() {
    let inputRef = document.getElementById('note_input');

    if(inputRef.value != ""){
        myData.push(inputRef.value);
    }

    saveToLocalStorage();

    renderNotes();
    inputRef.value = "";
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function getFromLocalStorage() {
    let obj = JSON.parse(localStorage.getItem("notes"));

    if (Array.isArray(obj)) {
        notes = obj;
    }
}



//notizen archivieren