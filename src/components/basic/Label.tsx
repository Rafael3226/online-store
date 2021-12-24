import React from 'react'

function Label({
  className,
  children,
  htmlFor,
}: {
  className?: string
  children?: string | JSX.Element | JSX.Element[]
  htmlFor?: string
}) {
  if (!children) return <></>
  return (
    <label
      className={`${className} text-primary-500 font-light dark:text-primary-300`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  )
}

export default Label
