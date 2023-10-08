import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import LeftNavbar from '../LeftNavbar'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundSubTitle,
  Container,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightMode} = value

      const notFoundImage = lightMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <Container>
            <LeftNavbar />
            <NotFoundContainer bgColor={lightMode}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHeading textColor={lightMode}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundSubTitle textColor={lightMode}>
                we are sorry, the page you requested could not be found.
              </NotFoundSubTitle>
            </NotFoundContainer>
          </Container>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
