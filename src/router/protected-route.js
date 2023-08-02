import React from 'react'
import { useAppSelector } from '../store/slices/hooks'
import AuthPage from '../pages/common/auth-page';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, admin}) => {
    const {isUserLogin, user}=useAppSelector(state=>state.auth);

    if(!isUserLogin) return <Navigate to="/auth"/>;
    if(admin && !user.roles.includes("Administrator")) return <Navigate to="/unauthorized"/>

  return children;
}

export default ProtectedRoute