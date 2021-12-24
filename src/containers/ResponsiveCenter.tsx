import React from 'react'

function ResponsiveCenter({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return (
    <div className="pt-32 px-4 grid sm:px-16 md:px-32 lg:px-64 xl:px-96">
      <div className="2xl:px-24">{children}</div>
    </div>
  )
}

export default ResponsiveCenter
