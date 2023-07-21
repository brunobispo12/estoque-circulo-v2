import { useContext } from 'react'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'


const PrivateRoutes = () => {
    const location = useLocation();
    const { sessionContextValue } = useContext(AuthContext)

    console.log(sessionContextValue)

    if (sessionContextValue.isAuth === undefined) {
        return null; 
    }

    return sessionContextValue.isAuth
        ? <Outlet />
        : <Navigate to="/login" replace state={{ from: location }} />;
}

export default PrivateRoutes