import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayouts,
    },
    {
        path: '/plants',
        element: <p>planst</p>
    },
    {
        path: '/profile',
        element: <p>profile</p>
    },
    {
        path: '/*',
        element: <p>eror</p>
    }
])

export default router