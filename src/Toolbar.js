import { nanoid } from 'nanoid'
import React from 'react'
import './toolbar.css'

const Toolbar = ({ filterList, onClick }) => {
  if (!filterList.length) return null

  return (
    <div className='toolbarWrap'>
      {filterList.map((item) => (
        <button
          onClick={() => {
            onClick(item)
            console.log(item)
          }}
          className='buttonToolbar'
          key={nanoid()}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default Toolbar
