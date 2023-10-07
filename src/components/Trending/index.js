import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiTwotoneFire} from 'react-icons/ai'

import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import TrendingVideos from '../TrendingVideos'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingContainer,
  TrendingBanner,
  TrendingHeading,
  Title,
  SubTitle,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosData: [],
  }

  componentDidMount() {
    this.trendingApi()
  }

  retryAgain = () => {
    this.trendingApi()
  }

  trendingApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    //  console.log(data)
    if (response.ok) {
      const updatedData = data.videos.map(item => ({
        channel: {
          name: item.channel.name,
          profileImageUrl: item.channel.profile_image_url,
        },
        id: item.id,
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      //    console.log(updatedData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosData: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  onSuccessApi = lightMode => {
    const {trendingVideosData} = this.state
    //  console.log(trendingVideosData)
    return (
      <div className="trendingRightContainer">
        <TrendingBanner bgColor={lightMode}>
          <AiTwotoneFire size={30} color="#ff0000" className="fireIcon" />
          <TrendingHeading textColor={lightMode}>Trending</TrendingHeading>
        </TrendingBanner>

        <ul className="trendingUnorderedList">
          {trendingVideosData.map(trendingDetails => (
            <TrendingVideos
              trendingDetails={trendingDetails}
              key={trendingDetails.id}
            />
          ))}
        </ul>
      </div>
    )
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

  renderSomething = lightMode => {
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
            <div className="appContainer-Trending">
              <Header />
              <TrendingContainer bgColor={lightMode} data-testid="trending">
                <LeftNavbar />
                {this.renderSomething(lightMode)}
              </TrendingContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
