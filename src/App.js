import './App.css'

import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import Gaming from './components/Gaming'
import SavedListView from './components/SavedListView'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    lightMode: true,
    savedList: [],
  }

  themeChange = () => {
    this.setState(prevState => ({
      lightMode: !prevState.lightMode,
    }))
  }

  addToSave = video => {
    this.setState(prevState => ({savedList: [...prevState.savedList, video]}))
  }

  deleteSave = id => {
    const {savedList} = this.state
    const filteredList = savedList.filter(item => item.videoDetails.id !== id)
    this.setState({savedList: filteredList})
  }

  render() {
    const {lightMode, savedList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          lightMode,
          switchMode: this.themeChange,
          savedList,
          addToSave: this.addToSave,
          deleteSave: this.deleteSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedListView}
          />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
