import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import LeftNavbar from '../LeftNavbar'

import {
  VideoItemDetailsRightContainer,
  VideoTitle,
  ProfileName,
  VideoSubscribers,
  VideoItemDescription,
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
  }

  componentDidMount() {
    this.videoDetailsApi()
  }

  likeOrDislike = () => {
    this.setState(prevState => ({liked: !prevState.liked}))
  }

  videoDetailsApi = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
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

  onSuccessApi = lightMode => {
    const {videosData, liked} = this.state
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
    const operaterClass = liked ? 'blueColor' : 'operatorName'
    return (
      <div className="videoDetailsContainer">
        <ReactPlayer url={videoUrl} controls width={390} height={280} />
        <VideoTitle textColor={lightMode}>{title}</VideoTitle>
        <div className="operations">
          <div className="viewAndPublishedTimeContainer">
            <p className="viewCount">{viewCount}</p>
            <p className="publishedTime">
              {numericValue} {unit}
            </p>
          </div>
          <div className="operators">
            <div className="operator">
              <BiLike size={20} color="#94a3b8" />
              <p className={operaterClass} onClick={this.likeOrDislike}>
                Like
              </p>
            </div>
            <div className="operator">
              <BiDislike size={20} color="#94a3b8" />
              <p className={operaterClass}>Dislike</p>
            </div>
            <div className="operator">
              <MdPlaylistAdd size={20} color="#94a3b8" />
              <p className={operaterClass}>Save</p>
            </div>
          </div>
        </div>
        <hr className="hrLine" />
        <div className="details">
          <img src={profileImageUrl} alt="" className="videoItemProfile" />
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

  renderFetchedVideoDetails = lightMode => {
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
            <div className="appContainer-videoItemDetails">
              <Header />
              <div className="videoItemDetails">
                <LeftNavbar />
                <VideoItemDetailsRightContainer
                  bgColor={lightMode}
                  data-testid="videoItemDetails"
                >
                  {this.renderFetchedVideoDetails(lightMode)}
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
