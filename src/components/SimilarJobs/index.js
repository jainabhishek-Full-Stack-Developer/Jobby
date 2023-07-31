import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const SimilarJobs = props => {
  const {similarJobsData} = props
  const {
    companyLogoUrl,
    // {eslint}
    jobDescription,
    employmentType,
    location,
    rating,
    title,
  } = similarJobsData

  return (
    <li className="similarJobLiContainer">
      <div className="imgJobTitleContainer">
        <img
          className="companyJobLogo"
          src={companyLogoUrl}
          alt="similar job company logo"
        />
        <div className="titleJobRatingContainer">
          <h1 className="titleJobHeading">{title}</h1>
          <div className="starJobRatingContainer">
            <AiFillStar className="starIcon" />
            <p className="ratingJobText">{rating}</p>
          </div>
        </div>
      </div>
      <div className="secondPartCon">
        <h1 className="desHeading">Description</h1>
        <p className="desPara">{jobDescription}</p>
      </div>
      <div className="locationJobDetailsCon">
        <div className="locationJonIconCon">
          <MdLocationOn className="locationIcon" />
          <p className="location">{location}</p>
        </div>
        <div className="employmentTypeCon">
          <p className="jobType">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
