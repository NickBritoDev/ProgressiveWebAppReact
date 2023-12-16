import React from 'react'
import { Outlet } from 'react-router-dom'
import componentKey from '../key/componentKey'

export default function Admin() {
    return (
        <React.Fragment key={componentKey}>
            <Outlet />
        </React.Fragment>
    )
}
