import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <>
      <Header />
      <div className="homeContainer">
        <h1 className="homeHeading">
          Find The Job That <br />
          Fits Your Life
        </h1>
        <p className="homePara1 homePara">
          Millions of people are searching for jobs, salary information,
        </p>
        <p className="homePara2 homePara">
          company reviews. Find the job that fits your abilities and potential.
        </p>
        <Link className="retryBtnLink" to="/jobs">
          <button
            className="homeJobsButton"
            type="button"
            onClick={onRedirectToJobs}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
