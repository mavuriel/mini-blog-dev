
import React from 'react'
import styled from 'styled-components'
import { LinkSecondaryButton } from '../collections/Button'

const Article = ({ className, article }) => {
  const { social_image: socialImage, title, url } = article

  return (
    <div className={className}>
      <img src={socialImage} alt={title} />
      <div>
        <h3>{title}</h3>
        <LinkSecondaryButton href={url}> Ver mas </LinkSecondaryButton>
      </div>
    </div>
  )
}

export default styled(Article)`
  box-shadow: 0px 0px 12px rgba(0,0,0,0.1);
  border: 1px solid #e6e6e6;
  width: min(300px, 100%);

  div{
    padding: 1.5rem;
  }

  h3{
    margin: 0 0 0.5rem;
  }

  img{
    width: 100%;
  }
`
