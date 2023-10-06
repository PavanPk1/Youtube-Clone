import './index.css'
import {Link} from 'react-router-dom'
import {AiFillHome, AiTwotoneFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import {
  LeftPannel,
  NavigationOption,
  SocialMedia,
  ContactUs,
  Description,
} from './styledComponents'

const LeftNavbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightMode} = value
      return (
        <LeftPannel bgColor={lightMode}>
          <ul className="leftPannelUnorderedList">
            <li id="HOME">
              <Link to="/" className="pathRouteLink">
                <AiFillHome size={20} className="navigationIcon" />
                <NavigationOption textColor={lightMode}>Home</NavigationOption>
              </Link>
            </li>
            <li id="TRENDING">
              <Link to="/trending" className="pathRouteLink">
                <AiTwotoneFire size={20} className="navigationIcon" />
                <NavigationOption textColor={lightMode}>
                  Trending
                </NavigationOption>
              </Link>
            </li>
            <li id="GAMING">
              <Link to="/gaming" className="pathRouteLink">
                <SiYoutubegaming size={20} className="navigationIcon" />
                <NavigationOption textColor={lightMode}>
                  Gaming
                </NavigationOption>
              </Link>
            </li>
            <li id="SAVED VIDEOS">
              <Link to="/saved-videos" className="pathRouteLink">
                <MdPlaylistAdd size={20} className="navigationIcon" />
                <NavigationOption textColor={lightMode}>
                  Saved Videos
                </NavigationOption>
              </Link>
            </li>
          </ul>
          <div>
            <ContactUs textColor={lightMode}>CONTACT US</ContactUs>
            <a href="https://www.facebook.com" target="self">
              <SocialMedia
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
            </a>
            <a href="https://www.twitter.com" target="self">
              <SocialMedia
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
            </a>
            <a href="https://www.linkedin.com" target="self">
              <SocialMedia
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </a>
            <Description textColor={lightMode}>
              Enjoy! Now to see your channels and recommendations!
            </Description>
          </div>
        </LeftPannel>
      )
    }}
  </ThemeContext.Consumer>
)

export default LeftNavbar
