import React from 'react'

const ThemeContext = React.createContext({
  lightMode: true,
  switchMode: () => {},
  savedList: [],
  addToSave: () => {},
  deleteSave: () => {},
})

export default ThemeContext
