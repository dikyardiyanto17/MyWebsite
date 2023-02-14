import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home';
import Layout from '../components/Layout';
import MyWorks from '../views/MyWorks';
import StayTuned from '../views/StayTuned';

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
                path: "StayTuned",
                element: (
                    <StayTuned />
                ),
            },
        ]
    },
]);

export default router