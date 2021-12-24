import React from 'react'
import Label from '../components/basic/Label'
import DarkMode from '../containers/DarkMode'
import ResponsiveCenter from '../containers/ResponsiveCenter'
import NavBar from '../layout/NavBar'

function DefaultPage() {
  return (
    <>
      <NavBar />
      <DarkMode>
        <ResponsiveCenter>
          <Label className="text-center text-9xl">Page 404</Label>
        </ResponsiveCenter>
      </DarkMode>
    </>
  )
}

export default DefaultPage
