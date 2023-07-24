import { Outlet, useLocation, Navigate } from 'react-router-dom'
import useSessionInfos from '../../hooks/useSessionInfos';

const PrivateRoutes = () => {
    const location = useLocation();
    const { userIsAuth } = useSessionInfos()

    const cachedData = localStorage.getItem('sessionData')
    const sessionIsAuth = cachedData ? JSON.parse(cachedData) : userIsAuth

    return sessionIsAuth ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default PrivateRoutes;