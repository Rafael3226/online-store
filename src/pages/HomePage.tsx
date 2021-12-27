import React from 'react'
import Label from '../components/basic/Label'
import DarkMode from '../containers/DarkMode'
import ResponsiveCenter from '../containers/ResponsiveCenter'
import NavBar from '../layout/NavBar'

function HomePage() {
  return (
    <DarkMode>
      <NavBar />
      <ResponsiveCenter>
        <Label className="text-4xl">This is the home page</Label>
        <br />
        <Label className="my-2">Please go to products</Label>
      </ResponsiveCenter>
    </DarkMode>
  )
}

export default HomePage
