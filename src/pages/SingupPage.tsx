import React from 'react'
import DarkMode from '../containers/DarkMode'
import ResponsiveCenter from '../containers/ResponsiveCenter'
import ErrorAlert from '../components/alerts/ErrorAlert'
import NavBar from '../layout/NavBar'
import SingupForm from '../components/forms/SingupForm'

function SingupPage() {
  return (
    <DarkMode>
      <NavBar />
      <ResponsiveCenter>
        <SingupForm />
        <ErrorAlert />
      </ResponsiveCenter>
    </DarkMode>
  )
}

export default SingupPage
