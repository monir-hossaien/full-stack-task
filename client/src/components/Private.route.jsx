import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { authStore } from "../store/auth.store.js";


const PrivateRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const { checkLoggedIn, loggedIn } = authStore();

    useEffect(()=>{
        (async ()=>{
            await checkLoggedIn();
             setLoading(false);
        })()
    },[loggedIn]);

    if (loading) return "";

  if (!loggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;

};

export default PrivateRoute;
