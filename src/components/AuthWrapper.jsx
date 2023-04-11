import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const AuthWrapper = ({ loggedIn }) => {
    console.log('loggedIn', loggedIn)
    return loggedIn ? <Outlet /> : <Navigate to="/auth/login" />;
};