import React from 'react'

const ButtonComp = ({label,onClick}) => {
  return (
    <div onClick={onClick} className='py-2 px-6 bg-black text-white rounded w-full text-sm mb-4 font-semibold text-center'>{label}</div>
  )
}

export default ButtonComp
