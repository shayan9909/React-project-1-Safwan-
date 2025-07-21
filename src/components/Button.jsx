import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`bg-secondary text-lg text-white font-medium font-jost  py-[26px] px-11 w-[198px] h-[64px] flex items-center justify-center relative after:absolute after:top-5px after:left-4px after:w-[188px] after:h-[54px] after:border after:border-white after:content-[""] ${className}`}>
      {text}
    </button>
  )
}

export default Button