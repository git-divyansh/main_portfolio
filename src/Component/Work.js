import React from 'react'
import "./WorkCard.css"
import ProjectCardData from './WorkData'
import WorkCard from './WorkCard'

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        {ProjectCardData.map((val, idx)=>{
            return(
                <WorkCard 
                    key = {idx}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    description = {val.description}
                    view = {val.view}
                    source = {val.source}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Work