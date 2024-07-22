import { Outlet } from 'react-router-dom'
import Footbar from './Footbar'
import Navbar2 from './Navbar2'

export default function Layout() {
    return (
        <>
            <Outlet />
            <Footbar />
        </>
    )
}