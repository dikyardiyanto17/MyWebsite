import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import Footbar from './Footbar'

export default function Layout() {
    return (
        <>
            <Navbar2 />
            <Outlet />
        </>
    )
}