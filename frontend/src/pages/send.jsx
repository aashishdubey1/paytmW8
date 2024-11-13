import React from 'react'

const Send = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-neutral-300'>
        <section className='w-80 rounded-lg bg-white px-5 pt-8 shadow-2xl'>
        <div  className='text-4xl text-center mb-12 font-bold'>Send Money</div>
        <div className='flex justify-start items-center'>
            <div className='h-12 w-12  rounded-full bg-green-600 text-white flex justify-center items-center text-xl font-medium mr-3'>A</div>
            <div className='text-xl font-bold'>Friend's Name</div>
        </div>
        <div className='text-md font-medium text-slate-700 mt-3 mb-1'>Amount in Rs</div>
        <input type="text" placeholder='Enter amount' className='w-full border border-slate-300 px-2 py-1 rounded '/>
        <div className='w-full bg-green-600 text-white text-center p-2 text-sm font-bold mt-5 mb-10 rounded-md'>Initiate Transfer</div>
        </section>
    </div>
  )
}

export default Send
