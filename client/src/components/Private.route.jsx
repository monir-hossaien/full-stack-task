import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAuth} from "../context/auth.context.jsx";
import ProgressBar from "./Progress.bar.jsx";


const PrivateRoute = ({ children }) => {
    const { loading, isLogin } = useAuth();

    if(loading)  return <ProgressBar />;

    if(!isLogin){
        return <Navigate to="/" replace />;
    }


  return children;

};

export default PrivateRoute;
