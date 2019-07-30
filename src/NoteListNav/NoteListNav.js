import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { countNotesForFolder } from '../notes-helpers'
import './NoteListNav.css'

export default class NoteListNav extends React.Component {
  static contextType = ApiContext;


  render() {
    const { folders=[], notes=[] } = this.context
    console.log(notes)
    console.log(folders.id)
    
    return (
      <div className='NoteListNav'>
        <ul className='NoteListNav__list'>
          {folders.map(folders =>
            <li key={folders.id}>
              <NavLink
                className='NoteListNav__folder-link'
                to={`/folders/${folders.id}`}
              >
                <span className='NoteListNav__num-notes'>
                  {countNotesForFolder(notes, folders.id)}
                </span>
                {folders.name}
              </NavLink>
            </li>
          )}
        </ul>
        <div className='NoteListNav__button-wrapper'>
          <CircleButton
            tag={Link}
            to='/add-folder'
            type='button'
            className='NoteListNav__add-folder-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Folder
          </CircleButton>
        </div>
      </div>
    )
  }
}
