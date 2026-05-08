import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Plants from "../pages/Plants/Plants";
import Profile from "../pages/Profile/Profile";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PlantDetails from "../components/PlantDetails/PlantDetails";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Loading from "../components/Loading/Loading";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayouts,
        children: [
            {
                index: true,
                loader: async () => {
                    const res = await fetch('/plants.json');
                    return res.json();
                },
                Component: Home,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/plants',
                loader: async () => {
                    const res = await fetch('/plants.json');
                    return res.json();
                },
                element: <Plants></Plants>,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/plant-details/:id',
                loader: async () => {
                    const res = await fetch('/plants.json');
                    return res.json();
                },
                element: (
                    <PrivateRoute>
                        <PlantDetails></PlantDetails>
                    </PrivateRoute>
                ),
                hydrateFallbackElement: <Loading></Loading>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/profile',
        element: (
            <PrivateRoute>
                <Profile></Profile>
            </PrivateRoute>
        ),
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;