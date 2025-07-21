import React from 'react'

const Images = ({src,className,alt}) => {
  return (
    <div>
<img src={src} alt={alt} className={className} />
    </div>
  )
}

export default Images