import './index.css'

import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import {
  LoginForm,
  LabelName,
  LoginPage,
  TextField,
  LoginBtn,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    displayPassword: false,
    errorMsg: '',
    displayErrorMsg: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({displayPassword: !prevState.displayPassword}))
  }

  renderUsernameField = lightMode => {
    const {username} = this.state
    return (
      <div className="inputContainer">
        <LabelName textColor={lightMode} htmlFor="username">
          USERNAME
        </LabelName>
        <TextField
          textColor={lightMode}
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </div>
    )
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = lightMode => {
    const {password, displayPassword} = this.state
    const passType = displayPassword ? 'text' : 'password'
    return (
      <div className="inputContainer">
        <LabelName textColor={lightMode} htmlFor="password">
          PASSWORD
        </LabelName>
        <TextField
          textColor={lightMode}
          type={passType}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </div>
    )
  }

  onSuccessfulLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 1,
    })

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({displayErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.onSuccessfulLogin(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {errorMsg, displayErrorMsg} = this.state
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightMode} = value
          const loginLogo = lightMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <LoginPage bgColor={lightMode}>
              <LoginForm bgColor={lightMode} onSubmit={this.onSubmitForm}>
                <img src={loginLogo} alt="website logo" className="loginLogo" />
                {this.renderUsernameField(lightMode)}
                {this.renderPasswordField(lightMode)}
                <div className="checkboxContainer">
                  <input
                    type="checkbox"
                    id="checkbox"
                    onClick={this.onClickShowPassword}
                  />
                  <label htmlFor="checkbox" className="showPassLabel">
                    Show Password
                  </label>
                </div>
                <LoginBtn type="submit">Login</LoginBtn>
                {displayErrorMsg && <p className="errorMsg">*{errorMsg}</p>}
              </LoginForm>
            </LoginPage>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
