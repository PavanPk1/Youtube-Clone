import React from 'react'

const ThemeContext = React.createContext({
  lightMode: true,
  switchMode: () => {},
})

export default ThemeContext
