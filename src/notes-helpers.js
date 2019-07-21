
export const findFolder = (folders=[], folder_id) =>
  folders.find(folders => folders.id === folder_id)

export const findNote = (notes=[], notes_id) =>
  notes.find(notes => notes.id === notes_id)

export const getNotesForFolder = (notes=[], folder_id) => (
  (!folder_id)
    ? notes
    : notes.filter(notes => notes.folder_id === folder_id)
)

export const countNotesForFolder = (notes=[], folder_id) =>
  notes.filter(notes => notes.folder_id === folder_id).length
