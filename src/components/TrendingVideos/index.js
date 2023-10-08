import './index.css'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {TrendingTitle, TrendingName} from './styledComponents'

const TrendingVideos = props => {
  const {trendingDetails} = props
  const {
    channel,
    id,
    thumbnailUrl,
    title,
    publishedAt,
    viewCount,
  } = trendingDetails
  const {name} = channel
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
          <li className="trendingList">
            <Link to={`/videos/${id}`} className="trendingLink">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="trendingThumbnail"
              />
              <div className="trendingDetails">
                <TrendingTitle textColor={lightMode}>{title}</TrendingTitle>
                <TrendingName textColor={lightMode}>{name}</TrendingName>
                <div className="viewAndCountContainer">
                  <p className="trendingViewsCount">{viewCount} views</p>
                  <p className="trendingVideoPublished">
                    {numericValue} {unit}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideos
