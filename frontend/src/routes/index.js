import { createBrowserRouter } from 'react-router-dom'
import Index from '../views/Index';
import Layout from '../components/Layout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: (
                    <Index />
                ),
            }
        ]
    },
]);

export default router