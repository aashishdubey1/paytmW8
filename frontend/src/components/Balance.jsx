import React from 'react'

const Balance = ({balance}) => {
  return (
    <div className=' flex'>
        <div className='text-xl font-bold'>
            Your Balance
        </div>
        <div className='text-xl font-bold pl-4'>
            Rs {balance}
        </div>
    </div>
  )
}

export default Balance
