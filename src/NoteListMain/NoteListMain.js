import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { getNotesForFolder } from '../notes-helpers'
import './NoteListMain.css'

export default class NoteListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  render() {
    const { folderid } = this.props.match.params
    const { notes=[] } = this.context
<<<<<<< HEAD
    const notesForFolder = getNotesForFolder(notes, folderid)
=======
    const notesForFolder = getNotesForFolder(notes, folderId)
    
>>>>>>> c2bf1feb9e772c9cd954bc0a453cd505bbac833e
    return (
      <section className='NoteListMain'>
        <ul>
          {notesForFolder.map(notes =>
            <li key={notes.id} >
              <Note
                id={notes.id}
                name={notes.name}
                date_modified={notes.modified}
              />
            </li>
          )}
        </ul>
        <div className='NoteListMain__button-container'>
          <CircleButton
            tag={Link}
            to='/add-note'
            type='button'
            className='NoteListMain__add-note-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Note
          </CircleButton>
        </div>
      </section>
    )
  }
}
