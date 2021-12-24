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
    <div className="w-full" onClick={() => onClick()}>
      <div
        className="h-auto flex-none bg-cover rounded text-center overflow-hidden"
        style={{ backgroundImage: `url(${imgURL})` }}
      ></div>
      <div className="border border-neutral-400 bg-white rounded  p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-neutral-900 font-bold text-xl mb-2">{name}</div>
          <p className="text-neutral-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardHorisontal
