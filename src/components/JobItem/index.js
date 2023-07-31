import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobItem = props => {
  const {jobsData} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobsData

  return (
    <Link to={`/jobs/${id}`} className="linkItem">
      <li className="jobItemContainer">
        <div className="firstPartContainer">
          <div className="imgTitleContainer">
            <img
              className="companyLogo"
              src={companyLogoUrl}
              alt="company logo"
            />
            <div className="titleRatingContainer">
              <h1 className="titleHeading">{title}</h1>
              <div className="starRatingContainer">
                <AiFillStar className="starIcon" />
                <p className="ratingText">{rating}</p>
              </div>
            </div>
          </div>
          <div className="locationPackageContainer">
            <div className="locationJobTypeContainer">
              <div className="locationIconLocationContainer">
                <MdLocationOn className="locationIcon" />
                <p className="location">{location}</p>
              </div>
              <div className="employmentTypeIcon">
                <p className="jobType">{employmentType}</p>
              </div>
            </div>
            <div>
              <p className="package">{packagePerAnnum}</p>
            </div>
          </div>
        </div>
        <hr className="itemHrLine" />
        <div className="secondPartContainer">
          <h1 className="descriptionHeading">Description</h1>
          <p className="descriptionPara">{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobItem
