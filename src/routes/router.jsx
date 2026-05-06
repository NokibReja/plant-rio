import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Plants from "../pages/Plants/Plants";
import Profile from "../pages/Profile/Profile";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PlantDetails from "../components/PlantDetails/PlantDetails";

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
                path: '/plant-details/:id',
                loader: async () => {
                    const res = await fetch('/plants.json');
                    return res.json();
                },
                element: <PlantDetails></PlantDetails>,
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