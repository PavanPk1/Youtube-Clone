import './index.css'
import {Link} from 'react-router-dom'

import {GameName, GameViewers} from './styledComponents'

const GamingItemDetails = props => {
  const {gameDetails, lightMode} = props

  const {id, thumbnailUrl, title, viewCount} = gameDetails
  return (
    <li className="gameList">
      <Link to={`/videos/${id}`} className="link">
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="gamingThumbnail"
        />
        <GameName textColor={lightMode}>{title}</GameName>
        <GameViewers textColor={lightMode}>
          {viewCount} Watching Worldwide
        </GameViewers>
      </Link>
    </li>
  )
}

export default GamingItemDetails
