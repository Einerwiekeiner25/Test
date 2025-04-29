function getNotTemplate(indexNote) {
    return `<p> + ${allNotes.notes[indexNote]} <button onclick="moveNote(${indexNote},'notes','trashNotes')"> X</button> </p>`    
}

function getTrashNotTemplate(indexTrashNote) {
    return `<p> + ${allNotes.trashNotes[indexTrashNote]} <button onclick="moveNote(${indexTrashNote},'trashNotes','archivNotes')"> X</button> </p>`    
}

function getArchivNotTemplate(indexArchivNote) {
    return `<p> + ${allNotes.archivNotes[indexArchivNote]} <button onclick="deleteArchivNote(${indexArchivNote})"> X</button> </p>`    
}