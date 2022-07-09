import React from 'react'
import Articles from './contains/Articles'
import Footer from './contains/Footer'
import Header from './contains/Header'
import Layout from './contains/Layout'
import ThemeProvider from './contexts/ThemeContext'
import { UserProvider } from './contexts/UserContext'

function App () {
  return (
    <div className="App">
      <UserProvider>
        <ThemeProvider>
          <Layout>
            <Header/>
            <Articles/>
            <Footer/>
          </Layout>
        </ThemeProvider>
      </UserProvider>
    </div>
  )
}

export default App
