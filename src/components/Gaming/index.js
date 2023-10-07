import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import ThemeContext from '../../context/ThemeContext'
import GamingItemDetails from '../GamingItemDetails'

import {
  GamingRightContainer,
  GamingBanner,
  GamingHeading,
  Title,
  SubTitle,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamesData: [],
  }

  componentDidMount() {
    this.renderGamingApi()
  }

  retryAgain = () => {
    this.renderGamingApi()
  }

  renderGamingApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      //    console.log(data)
      const updatedData = {
        videos: data.videos.map(item => ({
          id: item.id,
          title: item.title,
          thumbnailUrl: item.thumbnail_url,
          viewCount: item.view_count,
        })),
        total: data.total,
      }
      //    console.log(updatedData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamesData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onFailureApi = lightMode => {
    const failureImg = lightMode
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    return (
      <div className="noFoundContainer">
        <img src={failureImg} alt="failure view" className="noFoundImg" />
        <Title textColor={lightMode}>Oops! Something Went Wrong</Title>
        <SubTitle textColor={lightMode}>
          We are having some trouble to complete your request. Please try again.
        </SubTitle>
        <button type="button" className="retryBtn" onClick={this.retryAgain}>
          Retry
        </button>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  onSuccessApi = lightMode => {
    const {gamesData} = this.state
    return (
      <>
        <GamingBanner bgColor={lightMode}>
          <SiYoutubegaming size={30} color="#ff0000" className="fireIcon" />
          <GamingHeading textColor={lightMode}>Gaming</GamingHeading>
        </GamingBanner>
        <ul className="gamingUnorderedList">
          {gamesData.videos.map(item => (
            <GamingItemDetails
              gameDetails={item}
              lightMode={lightMode}
              key={item.id}
            />
          ))}
        </ul>
      </>
    )
  }

  renderGamingContainer = lightMode => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.onSuccessApi(lightMode)
      case apiStatusConstants.failure:
        return this.onFailureApi(lightMode)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightMode} = value
          return (
            <div className="appContainer-Gaming">
              <Header />
              <div className="gameContainer">
                <LeftNavbar />
                <GamingRightContainer bgColor={lightMode} data-testid="gaming">
                  {this.renderGamingContainer(lightMode)}
                </GamingRightContainer>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
