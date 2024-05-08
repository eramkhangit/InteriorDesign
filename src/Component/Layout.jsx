import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Navbar />
            <section className='bg-yellow-50 h-[100vh] '>
                <Outlet />
            </section>
        </>
    )
}

export default Layout