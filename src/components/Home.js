import React from 'react'
import Notes from './Notes'

const Home = (props) => {
  const {showAlert} = props;
  return (
    <>
    <div className="container"></div>
    <Notes showAlert= {showAlert}/>
    </>
  )
}

export default Home
