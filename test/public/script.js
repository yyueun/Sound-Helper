var notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
var noteIndex = 0;

function addNote() {
  var notesElement = document.getElementById('notes');
  notesElement.innerHTML += notes[noteIndex] + ' ';
  noteIndex = (noteIndex + 1) % notes.length;
}
