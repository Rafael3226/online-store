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
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  disabled?: boolean
  value?: string | number | readonly string[]
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
        className={`${className} w-full px-3 text-gray-900 border rounded-lg focus:outline-none focus-within:border-primary-500`}
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
