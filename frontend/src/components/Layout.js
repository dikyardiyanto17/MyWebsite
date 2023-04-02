import { Outlet } from 'react-router-dom'
import Navbar2 from './Navbar2'

export default function Layout() {
    return (
        <>
            <Navbar2 />
            <Outlet />
        </>
    )
}