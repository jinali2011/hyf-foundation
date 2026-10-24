const notes = [];

function saveNote(desc, idValue) {
  notes.push({ task: desc, id: idValue });
}

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  console.log("Note is not available.");
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].task}`,
    );
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

const firstNote = getNote(2);
console.log(firstNote);

logOutNotesFormatted();
