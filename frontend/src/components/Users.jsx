import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Users = () => {
    const [users,setUsers] = useState([])
    const [filter,setFilter] = useState('')
    // console.log("navigate =>",navigate)
    useEffect(() => {
        async function fetchData() {
          // You can await here
          const response = await axios.get(`${import.meta.env.VITE_GET_USERS_API_URL}?filter=${filter}`);
        //   console.log(response.data.users)
          setUsers(response.data.users);

        }
        fetchData();
      }, [filter]);
console.log('users=>',users)


  return (
    <div>
        <div className='text-xl font-semibold mt-8 mb-4'>Users</div>
        <input onChange={(e)=>setFilter(e.target.value)} placeholder='Search Users...' className='py-2 px-3 w-full border border-slate-400 mb-4' />
        {users.map((e,i)=><User name={e.firstname} key={i} />)}
    </div>
  )
}


function  User({name}) {
    const navigate = useNavigate();
    return (
        <div className='flex justify-between shadow-sm rounded my-4'>
            <div className='flex justify-center items-center'>
                <div className='py-2 px-4 bg-neutral-400 text-white font-medium uppercase rounded-full mr-2'>{name[0]}</div>
                <div className='font-medium'>{name}</div>
            </div>
            <div onClick={()=>navigate('/send')} className='px-8 py-3 bg-black text-white text-sm font-medium rounded'>Send Money</div>
        </div>
    )
}



export default Users
