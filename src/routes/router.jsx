import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Plants from "../pages/Plants/Plants";
import Profile from "../pages/Profile/Profile";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayouts,
        children: [
            {
                index: true,
                loader: () => fetch('./plants.json'),
                Component: Home
            },
            {
                path: '/plants',
                loader: () => fetch('./plants.json'),
                element: <Plants></Plants>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },

    {
        path: '/*',
        element: <p>eror</p>
    }
])

export default router