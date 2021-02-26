const $noteTitle = $(".note-title");
const $noteText = $(".note-textarea");
const $saveNoteBtn = $(".save-note");
const $newNoteBtn = $(".new-note");
const $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
let activeNote = {};

// A function for getting all notes from the db
const getNotes = () => {
  return $.ajax({
    url: "/api/notes",
    method: "GET",
  });
};

// A function for saving a note to the db
const saveNote = (note) => {
    return $.ajax({
      url: "/api/notes",
      data: note,
      method: "POST",
    });
  };

  // A function for deleting a note from the db
const deleteNote = (id) => {
    return $.ajax({
      url: "api/notes/" + id,
      method: "DELETE",
    });
  };

  // If there is an activeNote, display it, otherwise render empty inputs
const renderActiveNote = () => {
    $saveNoteBtn.hide();
  
    if (activeNote.id) {
      $noteTitle.attr("readonly", true);
      $noteText.attr("readonly", true);
      $noteTitle.val(activeNote.title);
      $noteText.val(activeNote.text);
    } else {
      $noteTitle.attr("readonly", false);
      $noteText.attr("readonly", false);
      $noteTitle.val("");
      $noteText.val("");
    }
  };