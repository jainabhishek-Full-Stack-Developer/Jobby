import {Link, withRouter} from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {BsBagFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navContainer">
      <div>
        <Link className="link" to="/">
          <img src={websiteLogo} alt="website logo" className="logo" />
        </Link>
      </div>
      <div>
        <ul className="headerUlContainer">
          <li>
            <Link to="/" className="link">
              <ImHome className="homeIcon" />
              <h1 className="navText">Home</h1>
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="link">
              <BsBagFill className="homeIcon" />
              <h1 className="navText">Jobs</h1>
            </Link>
          </li>
          <li>
            <FiLogOut className="homeIcon" onClick={onClickLogout} />
            <button className="btnLogout" type="button" onClick={onClickLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
