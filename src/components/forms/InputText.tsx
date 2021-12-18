import React from 'react'

interface InputTextProps {
  className?: string
  required?: boolean
  onChange?: Function
  label?: string
  value?: string
  type?: string
  name?: string
  id?: string
}

const InputText = ({
  className,
  required,
  onChange = () => {},
  label,
  value,
  type,
  name,
  id,
}: InputTextProps): JSX.Element => {
  return (
    <div className={className}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        placeholder={label}
        className="form-control"
        onChange={(e) => onChange(e)}
        required={required}
        value={value}
        name={name}
        type={type}
        id={id}
      />
    </div>
  )
}

export default InputText
