import React from 'react'
import './projectList.css'
import { nanoid } from 'nanoid'

const ProjectList = ({ arr }) => {
  return (
    <div className='photoCards'>
      {arr.map((item) => {
        return (
          <div className='photoCard' key={nanoid()}>
            <img src={item.img} alt='imgCard' />
          </div>
        )
      })}
    </div>
  )
}

export default ProjectList
