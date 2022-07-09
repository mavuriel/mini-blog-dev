import React, { useContext } from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../collections/Button'
import { ThemeContext } from '../contexts/ThemeContext'

const Footer = ({ className }) => {
  const [theme, toggleTheme] = useContext(ThemeContext)

  return (
    <footer className={ className }>
      <p>Gracias por ver la pagina :D</p>
      <PrimaryButton theme={theme} onClick={toggleTheme}>Cambiar tema</PrimaryButton>
    </footer>
  )
}

export default styled(Footer)`
  text-align: center;
  padding: 60px 0;

  button{
    display: inline-block;
  }
`
