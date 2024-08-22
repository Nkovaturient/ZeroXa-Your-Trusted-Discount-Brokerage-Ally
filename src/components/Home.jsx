import React from 'react'
import TopBar from './TopBar'
import Dashboard from './Dashboard'

const Home = ({url}) => {

  return (
    <>
    <TopBar/>
    <Dashboard url={url}/>
    </>
  )
}

export default Home