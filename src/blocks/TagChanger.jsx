import React, { useContext } from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../collections/Button'
import { UserContext } from '../contexts/UserContext'

const TagChanger = ({ className }) => {
  const [articles, setArticles] = useContext(UserContext)

  const changeTag = () => {
    const newTag = articles.tag === 'react' ? 'laravel' : 'react'
    setArticles({ ...articles, tag: newTag })
  }

  return (
    <div className={className}>
      <p>
        Ver aticulos de
        <SecondaryButton onClick={changeTag}>
          { articles.tag === 'react' ? 'Laravel' : 'React' }
        </SecondaryButton>
      </p>
    </div>
  )
}

export default styled(TagChanger)`
  
`
