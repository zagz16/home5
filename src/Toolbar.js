import { nanoid } from 'nanoid'
import React from 'react'
import './toolbar.css'

const Toolbar = ({ name, onChange }) => {
  /* selected="All" */
  /* onSelectFilter={(filter) => {console.log(filter)}}  */
  console.log(onChange)
  return (
    <div className='toolbarWrap'>
      {name.map((item) => (
        <button className='buttonToolbar' key={nanoid()}>
          {item}
        </button>
      ))}
    </div>
  )
}

export default Toolbar
