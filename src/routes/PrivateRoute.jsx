/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Shared/LoadingSpinner/Loading';

const PrivateRoute = ({children}) => {
    const  { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading/>
    }
    if (user) {
        return children;
    }
  return <Navigate to="/login" state={{from:location}} replace/>
}

export default PrivateRoute
