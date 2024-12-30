import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Routes/Footer'
import Navbar from './Routes/Navbar'
const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Roots