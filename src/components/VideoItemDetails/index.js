import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {TiTick} from 'react-icons/ti'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import LeftNavbar from '../LeftNavbar'

import {
  VideoItemDetailsRightContainer,
  VideoTitle,
  ProfileName,
  VideoSubscribers,
  VideoItemDescription,
  Title,
  SubTitle,
  Button,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosData: [],
    liked: false,
    disliked: false,
    saved: false,
  }

  componentDidMount() {
    this.videoDetailsApi()
  }

  onClickLikeBtn = () => {
    this.setState(prevState => ({liked: !prevState.liked, disliked: false}))
  }

  onClickDislikeBtn = () => {
    this.setState(prevState => ({disliked: !prevState.disliked, liked: false}))
  }

  onClickSaveBtn = (addToSave, deleteSave) => {
    const {videosData, saved} = this.state
    const {videoDetails} = videosData
    const {id} = videoDetails

    if (!saved) {
      addToSave(videosData)
      localStorage.setItem(`${id}`, true)
      this.setState({saved: true})
    } else {
      deleteSave(id)
      localStorage.removeItem(id)
      this.setState({saved: false})
    }
  }

  retryAgain = () => {
    this.videoDetailsApi()
  }

  videoDetailsApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    if (!localStorage.getItem(id)) {
      this.setState({saved: false})
    } else {
      this.setState({saved: true})
    }
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = {
        videoDetails: {
          id: data.video_details.id,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          thumbnailUrl: data.video_details.thumbnail_url,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
          viewCount: data.video_details.view_count,
          publishedAt: data.video_details.published_at,
          description: data.video_details.description,
        },
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosData: updatedData,
      })
      //    console.log(data)
      //    console.log(updatedData)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onSuccessApi = (lightMode, addToSave, deleteSave) => {
    const {videosData, liked, disliked, saved} = this.state
    const {videoDetails} = videosData
    const {
      videoUrl,
      title,
      publishedAt,
      viewCount,
      channel,
      description,
    } = videoDetails
    const {profileImageUrl, name, subscriberCount} = channel
    const date = new Date(publishedAt)
    const distance = formatDistanceToNow(date)

    // Extract the numeric part from the distance string
    const match = distance.match(/(\d+)\s+(\w+)/)
    const numericValue = match[1]
    const unit = match[2]

    const savedClass = saved ? 'active' : ''
    const isLikeActive = liked ? 'active' : ''
    const isDisLikeActive = disliked ? 'active' : ''

    return (
      <div className="videoDetailsContainer">
        <ReactPlayer url={videoUrl} controls width={390} height={280} />
        <VideoTitle textColor={lightMode}>{title}</VideoTitle>
        <div className="operations">
          <div className="viewAndPublishedTimeContainer">
            <p className="viewCount">{viewCount} views</p>
            <p className="publishedTime">
              {numericValue} {unit}
            </p>
          </div>
          <div className="operators">
            <div className={`operator ${isLikeActive}`}>
              <BiLike size={20} />
              <Button textColor={liked} onClick={this.onClickLikeBtn}>
                Like
              </Button>
            </div>

            <div className={`operator ${isDisLikeActive}`}>
              <BiDislike size={20} />
              <Button textColor={disliked} onClick={this.onClickDislikeBtn}>
                Dislike
              </Button>
            </div>

            <div className={`operator ${savedClass}`}>
              {!saved ? <MdPlaylistAdd size={20} /> : <TiTick size={20} />}
              <Button
                textColor={saved}
                onClick={() => this.onClickSaveBtn(addToSave, deleteSave)}
              >
                {saved ? 'Saved' : 'Save'}
              </Button>
            </div>
          </div>
        </div>
        <hr className="hrLine" />
        <div className="details">
          <img
            src={profileImageUrl}
            alt="channel logo"
            className="videoItemProfile"
          />
          <div className="">
            <ProfileName textColor={lightMode}>{name}</ProfileName>
            <VideoSubscribers textColor={lightMode}>
              {subscriberCount} subscribers
            </VideoSubscribers>
            <VideoItemDescription textColor={lightMode}>
              {description}
            </VideoItemDescription>
          </div>
        </div>
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

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

  renderFetchedVideoDetails = (lightMode, addToSave, deleteSave) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.onSuccessApi(lightMode, addToSave, deleteSave)
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
          const {lightMode, addToSave, deleteSave} = value
          return (
            <div className="appContainer-videoItemDetails">
              <Header />
              <div className="videoItemDetails">
                <LeftNavbar />
                <VideoItemDetailsRightContainer
                  bgColor={lightMode}
                  data-testid="videoItemDetails"
                >
                  {this.renderFetchedVideoDetails(
                    lightMode,
                    addToSave,
                    deleteSave,
                  )}
                </VideoItemDetailsRightContainer>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
