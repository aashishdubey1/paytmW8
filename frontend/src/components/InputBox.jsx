import React from 'react'

const InputBox = ({label,placeholder}) => {
  return (
    <div className='text-sm my-5 font-medium text-left pt-2'>
        {label}
        <input type="text" placeholder={placeholder} className='px-2 py-2 border-stone-300 border rounded w-full'  />
    </div>
  )
}

export default InputBox
