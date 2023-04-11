import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const AuthWrapper = ({ isLoggedIn }) => {
    return isLoggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};