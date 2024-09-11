document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault();

         const noteInput = document.getElementById('noteInput');
         const noteText = noteInput.value;

         const newNote = document.createElement('li');
         newNote.textContent = noteText;


    document.getElementById('noteList').appendChild(newNote);

   noteInput.value='';     


});