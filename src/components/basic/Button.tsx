import React, { MouseEventHandler } from 'react'

function Button({
  children,
  className = '',
  disabled,
  onClick,
  type,
  id,
}: {
  children?: JSX.Element
  className?: string
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  type: 'submit' | 'reset' | 'button'
  id?: string
}) {
  return (
    <button
      type={type}
      className={`${className} w-full bg-primary-500 rounded hover:opacity-80  disabled:opacity-50 px-2 py-1`}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  )
}

export default Button
