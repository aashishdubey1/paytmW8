import {createBrowserRouter} from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import { Children } from 'react'
import Send from '../pages/send'
import Signin from '../pages/signin'
import Signup from '../pages/signup'


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Dashboard />,

    },
    {
        path:"/send",
        element:<Send />,
    },
    {
        path:"/signin",
        element:<Signin />,
    },
    {
        path:"/signup",
        element:<Signup />,
    }
])
