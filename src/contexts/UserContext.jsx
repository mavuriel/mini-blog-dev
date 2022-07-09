
import React, { createContext, useEffect, useState } from 'react'

const tagContext = {
  tag: 'react',
  articlesFromDevTo: []
}

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [articles, setArticles] = useState(tagContext)

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        `https://dev.to/api/articles?per_page=10&tag=${articles.tag}`
      )

      const json = await response.json()

      setArticles({ ...articles, articlesFromDevTo: json })
    }

    fetchArticles()
  }, [articles.tag])

  return (
    <UserContext.Provider value={[articles, setArticles]}>
      {children}
    </UserContext.Provider>
  )
}
