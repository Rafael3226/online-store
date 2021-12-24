import React, {
  AriaRole,
  ChangeEventHandler,
  HTMLInputTypeAttribute,
} from 'react'
import Label from './Label'

function Input({
  placeholder,
  className = '',
  maxLength,
  onChange,
  disabled,
  value,
  label,
  name,
  type,
  id,
  role,
}: {
  placeholder?: string
  className?: string
  maxLength?: number
  onChange: ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
  value: string
  label?: string
  name?: string
  id?: string
  type?: HTMLInputTypeAttribute
  role?: AriaRole
}) {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <input
        className={`${className} w-full mt-2 mb-2 px-4 py-2 border border-neutral-300 rounded 
        focus:outline-none focus:border-primary-500 dark:bg-black dark:text-white dark:focus:border-primary-300`}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        disabled={disabled}
        value={value}
        name={name}
        type={type}
        role={role}
        id={id}
      />
    </>
  )
}

export default Input
