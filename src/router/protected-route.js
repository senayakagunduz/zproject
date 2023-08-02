import React from 'react'
import { useAppSelector } from '../store/slices/hooks'
import AuthPage from '../pages/common/auth-page';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {isUserLogin}=useAppSelector(state=>state.auth);

    if(!isUserLogin) return <Navigate to="/auth"/>

  return children;
}

export default ProtectedRoute