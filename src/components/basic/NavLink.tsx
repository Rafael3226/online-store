import React from 'react'
import { Link } from 'react-router-dom'

function NavLink({
  children,
  to,
}: {
  children: string | JSX.Element
  to: string
}) {
  return (
    <li>
      <Link
        to={to}
        className="text-bold text-primary-500 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-100"
      >
        {children}
      </Link>
    </li>
  )
}

export default NavLink
