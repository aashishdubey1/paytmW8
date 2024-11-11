import React, { useState } from 'react'

const Users = () => {
    const [users,setUsers] = useState([
        {
            name:"Aashish Dubey",
            email:"aashish@gmail.com",
            _id:1,
        },
    ])
  return (
    <div>
        <div className='text-xl font-semibold mt-8 mb-4'>Users</div>
        <input placeholder='Search Users...' className='py-2 px-3 w-full border border-slate-400 mb-4' />
        {users.map((e)=><User name={e.name} />)}
    </div>
  )
}


function  User({name}) {
    return (
        <div className='flex justify-between shadow-sm rounded my-4'>
            <div className='flex justify-center items-center'>
                <div className='py-2 px-4 bg-neutral-400 text-white font-medium uppercase rounded-full mr-2'>{name[0]}</div>
                <div className='font-medium'>{name}</div>
            </div>
            <div className='px-8 py-3 bg-black text-white text-sm font-medium rounded'>Send Money</div>
        </div>
    )
}



export default Users
