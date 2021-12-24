import React from 'react'
import ErrorAlert from '../components/alerts/ErrorAlert'
import DarkMode from '../containers/DarkMode'
import ResponsiveCenter from '../containers/ResponsiveCenter'
import NavBar from '../layout/NavBar'
import LoginForm from '../components/forms/LoginForm'

function LoginPage() {
  return (
    <DarkMode>
      <NavBar />
      <ResponsiveCenter>
        <LoginForm />
        <ErrorAlert />
      </ResponsiveCenter>
    </DarkMode>
  )
}

export default LoginPage
