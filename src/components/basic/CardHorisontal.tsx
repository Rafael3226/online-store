import React from 'react'

function CardHorisontal({
  name,
  description,
  imgURL,
  onClick,
}: {
  name: string
  description: string
  imgURL: string
  onClick: Function
}) {
  return (
    <div
      className="w-3/4 border border-neutral-300 rounded  p-4 flex justify-start leading-normal"
      onClick={() => onClick()}
    >
      <div>
        <img
          className="h-auto flex-none bg-cover rounded text-center overflow-hidden"
          src={imgURL}
          alt="imgURL"
          style={{ height: 100, width: 'auto' }}
        ></img>
      </div>
      <div className="mx-4">
        <div className="text-primary-500 dark:text-primary-300 font-bold text-xl mb-2">
          {name}
        </div>
        <p className="text-primary-500 dark:text-primary-300">{description}</p>
      </div>
    </div>
  )
}

export default CardHorisontal
