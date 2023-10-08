import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import LeftNavbar from '../LeftNavbar'
import {
  HomeContainer,
  BannerContainer,
  Title,
  SubTitle,
} from './styledComponents'
import HomeVideos from '../HomeVideos'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class Home extends Component {
  state = {
    search: '',
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    homeVideosData: [],
    displayBanner: true,
  }

  componentDidMount() {
    this.renderHomeVideosApi()
  }

  onClickCloseBtn = () => {
    this.setState({displayBanner: false})
  }

  retryAgain = () => {
    this.renderHomeVideosApi()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchIcon = () => {
    const {searchInput} = this.state
    this.setState({search: searchInput}, this.renderHomeVideosApi)
  }

  renderHomeVideosApi = async () => {
    const {search} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
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
        homeVideosData: updatedData,
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

  renderBanner = () => (
    <BannerContainer data-testid="banner">
      <button
        type="button"
        data-testid="close"
        onClick={this.onClickCloseBtn}
        className="closeBtn"
      >
        <AiOutlineClose size={20} />
      </button>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
        className="nxtWatchLogo"
      />
      <p className="bannerPara">Buy Nxt Watch Premium prepaid plans with UPI</p>
      <button type="button" className="getItNowBtn">
        GET IT NOW
      </button>
    </BannerContainer>
  )

  onSuccessApi = lightMode => {
    const {homeVideosData} = this.state
    //  console.log(homeVideosData)
    if (homeVideosData.length !== 0) {
      return (
        <ul className="homeVideosUnorderedListContainer">
          {homeVideosData.map(videoDetails => (
            <HomeVideos videoDetails={videoDetails} key={videoDetails.id} />
          ))}
        </ul>
      )
    }
    return (
      <div className="noFoundContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
          className="noFoundImg"
        />
        <Title textColor={lightMode}>No Search results found</Title>
        <SubTitle textColor={lightMode}>
          Try different key words or remove search filter
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
    const {displayBanner} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {lightMode} = value
          const {searchInput} = this.state
          return (
            <div className="appContainer-Home">
              <Header />
              <HomeContainer bgColor={lightMode} data-testid="home">
                <LeftNavbar />
                <div className="homeRightContainer">
                  {displayBanner && this.renderBanner(lightMode)}
                  <div className="searchContainer">
                    <input
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                      className="searchBar"
                    />
                    <button
                      type="button"
                      className="searchBtn"
                      data-testid="searchButton"
                      onClick={this.onClickSearchIcon}
                    >
                      <BiSearchAlt2 size={25} color="#909090" />
                    </button>
                  </div>
                  {this.renderSomething(lightMode)}
                </div>
              </HomeContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
