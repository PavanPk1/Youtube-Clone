import './index.css'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Popup} from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import {
  Navbar,
  LogOutBtn,
  IconButton,
  CustomButton,
  FinalLogoutCall,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const Header = props => {
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {lightMode, switchMode} = value
        const loginLogo = lightMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

        return (
          <Navbar bgColor={lightMode}>
            <Link to="/" className="logoLink">
              <img
                src={loginLogo}
                alt="nxt watch logo"
                className="websiteLogo"
              />
            </Link>
            <div className="navOptions">
              <button
                type="button"
                onClick={switchMode}
                className="themeButton"
              >
                {lightMode ? (
                  <FaMoon size={23} />
                ) : (
                  <BiSun size={30} color="#ffffff" />
                )}
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                className="profileIcon"
              />
              <IconButton iconColor={lightMode}>
                <GiHamburgerMenu size={25} />
              </IconButton>
              <Popup
                modal
                trigger={
                  <LogOutBtn outline={lightMode} color="#ffffff">
                    Log out
                  </LogOutBtn>
                  /*    <IconButton iconColor={lightMode}>
                      <FiLogOut size={25} />
                    </IconButton>   */
                }
                className="popup-content"
              >
                {close => (
                  <div className="popupContainer">
                    <FinalLogoutCall textColor={lightMode}>
                      Are you sure, you want to logout?
                    </FinalLogoutCall>
                    <div className="buttonChoices">
                      <CustomButton outline onClick={() => close()}>
                        Cancel
                      </CustomButton>

                      <CustomButton type="button" onClick={onClickLogOut}>
                        Confirm
                      </CustomButton>
                    </div>
                  </div>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <IconButton iconColor={lightMode}>
                    <FiLogOut size={25} />
                  </IconButton>
                }
                className="popup-content"
              >
                {close => (
                  <div className="popupContainer">
                    <FinalLogoutCall textColor={lightMode}>
                      Are you sure, you want to logout?
                    </FinalLogoutCall>
                    <div className="buttonChoices">
                      <CustomButton outline onClick={() => close()}>
                        Cancel
                      </CustomButton>

                      <CustomButton type="button" onClick={onClickLogOut}>
                        Confirm
                      </CustomButton>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </Navbar>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(Header)