import React from 'react'

function DisplayImg({ list }: { list: string[] }) {
  return (
    <div className="flex justify-center gap-4 my-4">
      {list.length !== 0 &&
        list.map((url, key) => (
          <img
            key={key}
            src={url}
            style={{ height: 300, width: 300 }}
            alt={`uploaded #${key}`}
            className="bg-neutral-300"
          ></img>
        ))}
    </div>
  )
}

export default DisplayImg
