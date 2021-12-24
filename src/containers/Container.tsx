import React from 'react'

function Container({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className={`container mx-auto sm:mx-auto bg-white dark:bg-black`}>
      <div className="mx-2">{children}</div>
    </div>
  )
}

export default Container
