import React, { AriaRole, ChangeEventHandler } from 'react'
import Label from './Label'

function TextArea({
  placeholder,
  className = '',
  disabled,
  label,
  value,
  rows,
  name,
  role,
  id,
  onChange,
}: {
  placeholder?: string
  className?: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
  disabled?: boolean
  value: string | number | readonly string[]
  label?: string
  role?: AriaRole
  rows?: number
  name?: string
  id?: string
}) {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <textarea
        className={`${className} w-full mt-2 mb-2 px-4 py-2 border border-neutral-300 rounded 
        focus:outline-none focus:border-primary-500 dark:bg-black dark:text-white dark:focus:border-primary-300`}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        rows={rows}
        name={name}
        role={role}
        id={id}
      />
    </>
  )
}

export default TextArea
