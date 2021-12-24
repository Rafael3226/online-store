import React, { MouseEventHandler } from 'react'

function Button({
  children,
  className = '',
  disabled,
  onClick,
  label,
  type,
  id,
}: {
  children?: JSX.Element
  className?: string
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  label?: string
  type: 'submit' | 'reset' | 'button'
  id?: string
}) {
  return (
    <button
      type={type}
      className={`${className} bg-primary-500 dark:bg-primary-400 rounded hover:opacity-80  disabled:opacity-50 px-2 py-1`}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {children}
      {label && <span className="text-white">{label}</span>}
    </button>
  )
}

export default Button
