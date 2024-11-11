import React from 'react'
import { Link } from "react-router-dom";
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import ButtonComp from '../components/Button';
import ButtonWarning from '../components/ButtonWarning';


const Signup = () => {
  return (
    <div className='flex h-screen w-full justify-center items-center bg-neutral-400'>
        <section className='rounded-lg px-5 py-6 w-80 bg-white'>
            <Heading label='Sign Up' />
            <SubHeading label={"Enter Your information to create an account"}/>
            <InputBox label={"First Name"} placeholder={"john"} />
            <InputBox label={"Last Name"} placeholder={"doe"} />
            <InputBox label={"Email"} placeholder={"johndoe@gmail.com"} />
            <InputBox label={"Password"} placeholder={""} />
            <ButtonComp label={"Sign Up"}/>
            <ButtonWarning label={"Already have an account ?"} linktext={"Login"} to={"/signin"} />

        </section>
    </div>
  )
}

export default Signup
