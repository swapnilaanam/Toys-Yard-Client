import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy/AddAToy";
import Blogs from "../pages/Blogs/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound/NotFound";
import ToyDetails from "../pages/ToyDetails/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/UpdateToy/UpdateToy/UpdateToy";
import SingleNews from "../pages/SingleNews/SingleNews";
import AboutUs from "../pages/AboutUs/AboutUs";
import MyCollections from "../pages/MyCollections/MyCollections";
import CheckOut from "../pages/CheckOut/CheckOut";
import Payment from "../pages/Payment/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toy-marketplace-server-gray-beta.vercel.app/toys')
            },
            {
                path: '/mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/addatoy',
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: '/mycollections',
                element: <PrivateRoute><MyCollections></MyCollections></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/news/:id',
                element: <SingleNews></SingleNews>
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-marketplace-server-gray-beta.vercel.app/toys/${params.id}`)
            },
            {
                path: 'toy/update/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-marketplace-server-gray-beta.vercel.app/toys/${params.id}`)
            }, 
            {
                path: 'checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: 'payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

export default router;