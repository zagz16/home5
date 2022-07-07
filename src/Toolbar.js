import React from 'react'
import './toolbar.css'

const Toolbar = (props) => {
  console.log(props)
  const filters = ['All', 'Websites', 'Flayers', 'Business Cards']
  /* selected="All" */
  /* onSelectFilter={(filter) => {console.log(filter)}}  */

  return (
    <div className='toolbarWrap'>
      return (<button className='buttonToolbar'>{item}</button>)
    </div>
  )
}

export default Toolbar
