import React from 'react';
import { Navigate } from 'react-router-dom';
import { authStore } from "../store/auth.store.js";

const PrivateRoute = ({ children }) => {
    const { isLogin } = authStore();

    if (!isLogin) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;
