import React from 'react'
import { Link } from 'react-router-dom'

const ButtonWarning = ({label,linktext,to}) => {
  return (
    <div className='text-center text-md '>
        {label}
        <Link to={to} className='cursor-pointer text-blue-700 text-sm underline pl-1'>{linktext}</Link>
    </div>
  )
}

export default ButtonWarning
