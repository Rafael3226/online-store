import React from 'react'
import Label from './Label'

function Switch({
  labelT,
  labelF,
  id,
  name,
  onChange,
  checked,
}: {
  labelT?: string
  labelF?: string
  id?: string
  name?: string
  onChange: Function
  checked: boolean
}) {
  return (
    <div className="w-full flex content-center">
      <div className="flex content-center my-1">
        <div
          className={`bg-white w-3 h-3 my-1 rounded-full shadow-md transform
         cursor-pointer ${checked ? 'translate-x-9' : 'translate-x-4'}`}
          onClick={() => onChange()}
        ></div>
        <input
          className="appearance-none w-10 h-5 rounded-full bg-contain cursor-pointer
         shadow-sm bg-neutral-300 checked:bg-primary-500 dark:checked:bg-primary-400"
          type="checkbox"
          role="switch"
          id={id}
          onChange={() => onChange()}
          name={name}
          checked={checked}
        />
      </div>
      <Label className="mx-2" htmlFor={id}>
        {checked ? labelT : labelF}
      </Label>
    </div>
  )
}

export default Switch
