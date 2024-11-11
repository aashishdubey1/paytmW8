import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import ButtonComp from '../components/Button'
import ButtonWarning from '../components/ButtonWarning'

const Signin = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-neutral-400'>
        <section className='rounded-lg bg-white w-74 px-8 py-4 '>
            <Heading label={"Sign In"} />
            <SubHeading label={"Enter your credentials to access your account"} />
            <InputBox label={"Email"} placeholder={"johndoe@example.com"} />
            <InputBox label={"Password"} placeholder={""} />
            <ButtonComp label={"Sign in"} />
            <ButtonWarning label={"Don't have an account ?"} linktext={"Sign up"} to={"/signup"} />
        </section>
    </div>
  )
}

export default Signin
