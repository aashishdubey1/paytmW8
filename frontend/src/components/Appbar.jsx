import React from 'react'

const Appbar = () => {
  return (
    <div className='w-full flex justify-between shadow-md px-8 py-4 items-center'>
        <div className='text-4xl font-bold'>Payments App</div>
        <div className='text-lg font-medium flex justify-center items-center'>
            Hello , User
            <div className='rounded-full p-1 bg-neutral-400 ml-4'>👤</div>
        </div>
    </div>
  )
}

export default Appbar
