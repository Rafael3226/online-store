import React from 'react'
import NavLink from '../components/basic/NavLink'

function NavLinks() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product/list">Products</NavLink>
    </>
  )
}

export default NavLinks
