import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const websiteLogoInForm =
  'https://assets.ccbp.in/frontend/react-js/logo-img.png'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onGetUsername = event => this.setState({username: event.target.value})

  onGetPassword = event => this.setState({password: event.target.value})

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="loginContainer">
        <form className="loginFormContainer" onSubmit={this.onSubmitLoginForm}>
          <div className="formLogoContainer">
            <img src={websiteLogoInForm} alt="website logo" />
          </div>
          <label className="formLabel" htmlFor="username">
            Username
          </label>
          <br />
          <input
            type="text"
            className="formInput"
            value={username}
            onChange={this.onGetUsername}
            placeholder="username"
            id="username"
          />
          <br />
          <br />

          <label className="formLabel" htmlFor="password">
            Password
          </label>
          <br />
          <input
            type="password"
            className="formInput"
            value={password}
            onChange={this.onGetPassword}
            placeholder="password"
            id="password"
          />
          <br />
          <br />
          <button type="submit" className="formSubmitButton">
            Login
          </button>
          {showSubmitError && <p className="errorMessage">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
