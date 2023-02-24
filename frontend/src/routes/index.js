import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home';
import Layout from '../components/Layout';
import MyWorks from '../views/MyWorks';
import StayTuned from '../views/StayTuned';
import Certificate from '../views/Certificate'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: (
                    <Home />
                ),
            },
            {
                path: "myworks",
                element: (
                    <MyWorks />
                ),
            },
            {
                path: "staytuned",
                element: (
                    <StayTuned />
                ),
            },
            {
                path: "certificate",
                element: (
                    <Certificate />
                ),
            },
        ]
    },
]);

export default router