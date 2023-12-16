import React from 'react'
import { useRoutes } from 'react-router-dom'
import { checkAuth } from '../auth/checkAuth'
import Admin from '../layout/Admin'
import Public from '../layout/Public'
import Home from '../pages/admin/home/Home'
import NotAuthorized from '../pages/public/navigators/401/NotAuthorized'
import NotFound from '../pages/public/navigators/404/NotFound'
import Signin from '../pages/public/signin/Signin'
import Signup from '../pages/public/signup/Signup'

export default function Routes() {
    const routing = useRoutes([
        {
            path: 'pwa/admin',
            element: <Admin />,
            children: [
                {
                    path: '',
                    element: checkAuth() ? <Home /> : <NotAuthorized />
                }
            ]
        },
        {
            path: '/pwa',
            element: <Public />,
            children: [
                { path: '', element: <Signin /> },
                { path: 'inscrever-se', element: <Signup/> },
                { path: '*', element: <NotFound /> }
            ]
        }
    ])

    return routing
}
