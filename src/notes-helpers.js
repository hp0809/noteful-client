
export const findFolder = (folders=[], folderId) =>
  folders.find(folders => folders.id === folderId)

export const findNote = (notes=[], notesId) =>
  notes.find(notes => notes.id === notesId)

export const getNotesForFolder = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(notes => notes.folder_id === folderId)
)
    console.log('getNotesForFolder ran')


export const countNotesForFolder = (notes=[], folderId) =>
  notes.filter(notes => notes.folderId === folderId).length
