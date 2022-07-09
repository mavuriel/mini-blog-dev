import React, { createContext, useState } from 'react'

export const lightTheme = {
  type: 'light',
  colors: {
    primary: '#f72585',
    text: '#000',
    background: '#fff',
    lightText: '#fff',
    primaryText: '#2ec4b6',
    darkBackground: '#14213d'
  }
}

export const darkTheme = {
  type: 'dark',
  colors: {
    primary: '#571089',
    text: '#faedcb',
    background: '#130007',
    lightText: '#fff',
    primaryText: '#2ec4b6',
    darkBackground: '#000'
  }
}

export const ThemeContext = createContext([lightTheme, () => {}])

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    const newTheme = theme.type === 'light' ? darkTheme : lightTheme
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
