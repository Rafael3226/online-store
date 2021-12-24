import React from 'react'
import Container from '../containers/Container'
import DarkMode from '../containers/DarkMode'
import NavBar from '../layout/NavBar'

function HomePage() {
  return (
    <DarkMode>
      <NavBar />
      <Container>
        <h6>Home</h6>
      </Container>
    </DarkMode>
  )
}

export default HomePage
