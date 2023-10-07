import './index.css'
import {GameName, GameViewers} from './styledComponents'

const GamingItemDetails = props => {
  const {gameDetails, lightMode} = props

  const {thumbnailUrl, title, viewCount} = gameDetails
  return (
    <li className="gameList">
      <img
        src={thumbnailUrl}
        alt="gaming thumbnail"
        className="gamingThumbnail"
      />
      <GameName textColor={lightMode}>{title}</GameName>
      <GameViewers textColor={lightMode}>
        {viewCount} Watching Worldwide
      </GameViewers>
    </li>
  )
}

export default GamingItemDetails
