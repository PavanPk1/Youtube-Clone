import './index.css'
import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {HomeVideoTitle} from './styledComponents'

const HomeVideos = props => {
  const {videoDetails} = props
  //    console.log(videoDetails)
  const {
    id,
    channel,
    thumbnailUrl,
    title,
    publishedAt,
    viewCount,
  } = videoDetails
  const {name, profileImageUrl} = channel
  const date = new Date(publishedAt)
  const distance = formatDistanceToNow(date)

  // Extract the numeric part from the distance string
  const match = distance.match(/(\d+)\s+(\w+)/)
  const numericValue = match[1]
  const unit = match[2]

  return (
    <ThemeContext.Consumer>
      {value => {
        const {lightMode} = value
        return (
          <li className="homeVideoList">
            <Link to={`/videos/${id}`} className="videoDetailsLink">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail"
              />
              <div className="videoDetailsContainer">
                <img
                  src={profileImageUrl}
                  alt="channel logo"
                  className="channelLogo"
                />
                <div className="videoDetails">
                  <HomeVideoTitle textColor={lightMode}>{title}</HomeVideoTitle>
                  <p className="channelName">{name}</p>
                  <div className="viewAndPublishedTimeContainer">
                    <p className="viewCount">{viewCount}</p>
                    <p className="publishedTime">
                      {numericValue} {unit}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideos
