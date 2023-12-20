// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, duration, description, projectUrl} =
    projectDetails
  return (
    <div className="project-bg">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="first">
        <h1 className="project-head">{projectTitle}</h1>
        <div className="second">
          <AiFillCalendar />
          <p className="project-date">{duration}</p>
        </div>
      </div>
      <p className="project-para">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
