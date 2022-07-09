import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../contexts/ThemeContext'
import { LinkPrimaryButton, LinkSecondaryButton } from '../collections/Button'
import { titleStyles } from '../collections/styles'
import Container from '../elements/Container'
import Row from '../elements/Row'
import StyledSpan from '../elements/StyledSpan'
import CircleImage from '../elements/CircleImage'

const H1Title = styled.h1`
  ${titleStyles}
  margin: 0;
`

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

// Styled components va a enviar un prop con el classname
// y debemos colocarlo en el componente
// eslint-disable-next-line react/prop-types
const Header = ({ className }) => {
  const [theme] = useContext(ThemeContext)

  return (
    <Container>
      <header className={className}>
        <InfoContainer>
          <H1Title>
            Bienvenidos,  mi nombre es <StyledSpan>Uriel Tenorio</StyledSpan>
          </H1Title>
          <Row justify='start'>
            <LinkPrimaryButton theme={ theme }>Mis proyectos</LinkPrimaryButton>
            <LinkPrimaryButton theme={ theme }>Descarga mi CV</LinkPrimaryButton>
          </Row>
          <LinkSecondaryButton>Mis articulos</LinkSecondaryButton>
        </InfoContainer>
        <CircleImage src="/IMG_20220113_143917.jpg" alt="Foto de Uriel" />
      </header>
    </Container>
  )
}

export default styled(Header)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3.8rem 0;
  align-items: center;
`
