import React, { useContext } from 'react'
import styled from 'styled-components'
import Article from '../blocks/Article'
import TagChanger from '../blocks/TagChanger'
import { ThemeContext } from '../contexts/ThemeContext'
import { UserContext } from '../contexts/UserContext'
import Container from '../elements/Container'
import Row from '../elements/Row'

const InnerContainer = styled.div`
  background-color: ${props => props?.theme?.colors?.darkBackground ?? '#14213d'};
  color: ${props => props?.theme?.colors?.lightText ?? '#fff'};
  padding: 50px 0 60px;
`

const Articles = () => {
  const [{ tag, articlesFromDevTo }] = useContext(UserContext)
  const [theme] = useContext(ThemeContext)

  return (
    <InnerContainer theme={ theme }>
      <Container>
        <h2>Estos son los articulos recientes de <strong>{tag}</strong> en Dev.to</h2>
        <TagChanger/>
        <Row>
          {
            articlesFromDevTo.map(article => (
              <Article key={article.id} article={article}/>
            ))
          }
        </Row>
      </Container>
    </InnerContainer>
  )
}

export default Articles
