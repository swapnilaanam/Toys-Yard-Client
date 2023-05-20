import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='w-full min-h-screen flex justify-center items-center'>
            <progress className="progress w-64"></progress>
        </div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace />
};

export default PrivateRoute;