import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Banner from './Banner'

const Layout = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <main className='w-full'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout