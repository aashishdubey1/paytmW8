import React from 'react'
import { Link } from "react-router-dom";
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import ButtonComp from '../components/Button';
import ButtonWarning from '../components/ButtonWarning';
import { useState } from "react";



import  axios  from "axios";

const Signup = () => {
    const [data,setData] = useState({
        firstname:'',
        lastname:'',
        username:'',
        password:'',
    })

    async function handleSubmit(){
        // console.log(data);
        try{
            const response = await axios.post(import.meta.env.VITE_SIGNUP_API_URL,data)
            console.log(response.data);
            const token = response.data.token;
            console.log(token)
            localStorage.setItem("token",token)
        }catch(err){
            console.log("Error Sending Post req",err.message)
        }

    }

  return (
    <div className='flex h-screen w-full justify-center items-center bg-neutral-400'>
        <section className='rounded-lg px-5 py-6 w-80 bg-white'>
            <Heading label='Sign Up' />
            <SubHeading label={"Enter Your information to create an account"}/>
            <InputBox label={"First Name"} placeholder={"john"} onClick={(e)=>setData({...data,firstname:e.target.value})} />
            <InputBox label={"Last Name"} placeholder={"doe"}  onClick={(e)=>setData({...data,lastname:e.target.value})} />
            <InputBox label={"Email"} placeholder={"johndoe@gmail.com"} onClick={(e)=>setData({...data,username:e.target.value})} />
            <InputBox label={"Password"} placeholder={""} onClick={(e)=>setData({...data,password:e.target.value})}/>
            <ButtonComp label={"Sign Up"} onClick={handleSubmit}/>
            <ButtonWarning label={"Already have an account ?"} linktext={"Login"} to={"/signin"} />

        </section>
    </div>
  )
}

export default Signup
