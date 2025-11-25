import React, {useEffect} from 'react';
import {ArrowLeft} from "lucide-react"
import { useNavigate } from "react-router-dom";
import {authStore} from "../store/auth.store.js";



const Error = () => {
    const {loggedIn, checkLoggedIn} = authStore()
    const navigate = useNavigate();

    useEffect(() => {
        (async ()=>{
            await checkLoggedIn()
        })()
    }, [loggedIn]);

    const handleRedirect = () =>{

        if(loggedIn) {
            navigate("/feed", { replace: true });
        }else{
            navigate("/", { replace: true });
        }
    }

    return (
        <>
            <section className="bg-white min-h-screen flex items-center">
                <div className="container mx-auto flex justify-center">
                    <div className="text-center">
                        <p className="text-4xl text-red-600">404!</p>
                        <h1 className="mt-3 text-2xl text-gray-800">
                            Page not found
                        </h1>
                        <p className="mt-2 text-gray-500">
                            The page you are looking for doesn't exist. Here are some helpful links:
                        </p>
                        <div className="flex justify-center mt-4 gap-2">
                            <button className="cursor-pointer border border-gray-400 flex items-center gap-2 px-4 py-2"
                                    onClick={()=>window.history.back()}>
                                <ArrowLeft className="text-2xl" />
                                <span>Go back</span>
                            </button>
                            <button
                                onClick={handleRedirect}
                                className="bg-gray-800 text-white px-4 py-2">
                                Take me home
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Error;