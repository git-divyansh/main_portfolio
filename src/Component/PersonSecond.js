import React from 'react'
import "./PersonSecond.css"

const PersonSecond = ({heading, text}) => {
  return (
    <div className='person-second'>
        <div className='heading'>
            <h1>{heading}</h1>
            <h1>{text}</h1>
        </div>
    </div>
  )
}

export default PersonSecond