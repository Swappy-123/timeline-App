// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-bg">
      <div className="first">
        <h1 className="course-head">{courseTitle}</h1>
        <div className="second">
          <AiFillClockCircle />
          <p className="course-time">{duration}</p>
        </div>
      </div>
      <p className="course-para">{description}</p>
      <ul className="course-list">
        {tagsList.map(each => (
          <li className="list" key={each.id}>
            <p className="course-button">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
