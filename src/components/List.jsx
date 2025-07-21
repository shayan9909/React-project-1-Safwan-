import React from 'react'

const List = ({text, className}) => {
  return (
    <div>
 <li className={`text-lg font-normal font-jost list-none text-primary cursor-pointer hover:text-secondary duration-300 ${className}`}>{text}</li>
    </div>
  )
}

export default List