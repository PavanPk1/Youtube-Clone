import './index.css'
import {AiTwotoneFire} from 'react-icons/ai'

import LeftNavbar from '../LeftNavbar'
import Header from '../Header'
import SavedItem from '../SavedItem'
import ThemeContext from '../../context/ThemeContext'

import {
  SavedContainer,
  TrendingBanner,
  TrendingHeading,
  Title,
  SubTitle,
} from './styledComponents'

const CartListView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {lightMode, savedList} = value
      //    console.log(savedList)

      const savedListItemsContainer = () => {
        if (savedList.length !== 0) {
          return (
            <>
              <TrendingBanner bgColor={lightMode}>
                <AiTwotoneFire size={30} color="#ff0000" className="fireIcon" />
                <TrendingHeading textColor={lightMode}>
                  Saved Videos
                </TrendingHeading>
              </TrendingBanner>
              <ul className="savedUnorderedListContainer">
                {savedList.map(eachSaveItem => (
                  <SavedItem
                    key={eachSaveItem.id}
                    savedItemDetails={eachSaveItem}
                    lightMode={lightMode}
                  />
                ))}
              </ul>
            </>
          )
        }
        return (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
              className="emptySavedImg"
            />
            <Title textColor={lightMode}>No saved Videos found</Title>
            <SubTitle textColor={lightMode}>
              You can save your videos while watching them
            </SubTitle>
          </>
        )
      }
      return (
        <>
          <Header />
          <SavedContainer bgColor={lightMode} data-testid="savedVideos">
            <LeftNavbar />
            <div className="savedRightContainer">
              {savedListItemsContainer()}
            </div>
          </SavedContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default CartListView
