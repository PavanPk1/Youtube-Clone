import './index.css'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {SavedVideoTitle} from './styledComponents'

const SavedItem = props => {
  const {savedItemDetails, lightMode} = props
  //    console.log(savedItemDetails)
  const {videoDetails} = savedItemDetails
  const {
    id,
    title,
    thumbnailUrl,
    publishedAt,
    viewCount,
    channel,
  } = videoDetails
  const {name} = channel
  const date = new Date(publishedAt)
  const distance = formatDistanceToNow(date)
  const match = distance.match(/(\d+)\s+(\w+)/)
  const numericValue = match[1]
  const unit = match[2]

  return (
    <li className="savedVideoListContainer">
      <Link to={`/videos/${id}`} className="savedVideoLink">
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="savedThumbnail"
        />
        <div className="savedVideoDetails">
          <SavedVideoTitle textColor={lightMode}>{title}</SavedVideoTitle>
          <p className="videoName">{name}</p>
          <div className="viewAndPublishedTimeContainer">
            <p className="viewCount">{viewCount} views</p>
            <p className="publishedTime">
              {numericValue} {unit}
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default SavedItem
