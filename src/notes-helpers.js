
export const findFolder = (folders=[], folderId) =>
  folders.find(folders => parseInt(folders.id) === parseInt(folderId))

export const findNote = (notes=[], noteId) => {
     return notes.find( (note) => {
       return parseInt(note.id) === parseInt(noteId)
       
      })
}

export const getNotesForFolder = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => parseInt(note.folderId) === parseInt(folderId))
)

export const countNotesForFolder = (notes=[], folderId) => 
  notes.filter(note => parseInt(note.folderId) === parseInt(folderId)).length
