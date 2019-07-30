
export const findFolder = (folders=[], folderId) =>
  folders.find(folders => folders.id === folderId)

export const findNote = (notes=[], noteId) => {
     notes.find( (note) => {
       console.log(note) //check if it has an id property
       return note.id == noteId
       
      })
}

export const getNotesForFolder = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folderId === folderId)
)

export const countNotesForFolder = (notes=[], folderId) =>
  notes.filter(note => note.folderId === folderId).length
