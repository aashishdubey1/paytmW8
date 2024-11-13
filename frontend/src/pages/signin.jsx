import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import ButtonComp from '../components/Button'
import ButtonWarning from '../components/ButtonWarning'
import axios from 'axios'

const Signin = () => {
    const [data,setData] = useState({
        username:'',
        password:''
    })

    async function handleSubmit() {
            try{
                const response = await axios.post(import.meta.env.VITE_SIGNIN_API_URL,data,{
                    headers: {
                        Authorization: localStorage.getItem('token')
                    },
                });
                console.log(response.data);
            }catch(err){
                console.log("Error while making Req",err)
            }
    }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-neutral-400'>
        <section className='rounded-lg bg-white w-74 px-8 py-4 '>
            <Heading label={"Sign In"} />
            <SubHeading label={"Enter your credentials to access your account"} />
            <InputBox label={"Email"} placeholder={"johndoe@example.com"} onClick={(e)=>setData({...data,username:e.target.value})}/>
            <InputBox label={"Password"} placeholder={""} onClick={(e)=>setData({...data,password:e.target.value})}/>
            <ButtonComp label={"Sign in"} onClick={handleSubmit}/>
            <ButtonWarning label={"Don't have an account ?"} linktext={"Sign up"} to={"/signup"} />
        </section>
    </div>
  )
}

export default Signin
