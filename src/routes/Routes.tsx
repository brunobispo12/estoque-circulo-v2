import PrivateRoutes from './components/PrivateRoute'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Items from '../pages/items/Items'
import NotFound from '../pages/notfound/NotFound'
import { useRoutes } from "react-router-dom"

const routes = [
    {
        path: '/',
        element: <PrivateRoutes />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/items',
                element: <Items />
            }
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound/>
    }
]

export default function Routes() {
    const router = useRoutes(routes)
    return router
}