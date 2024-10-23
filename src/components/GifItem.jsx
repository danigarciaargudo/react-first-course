import React from 'react'

export const GifItem = ({title, url, images}) => {

  return (
    <div className="card">
        <img src={images.downsized_medium.url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
