import React from 'react'
import { Outlet } from 'react-router-dom'
import componentKey from '../key/componentKey'

export default function Public() {
    return (
        <React.Fragment key={componentKey}>
            <Outlet />
        </React.Fragment>
    )
}
