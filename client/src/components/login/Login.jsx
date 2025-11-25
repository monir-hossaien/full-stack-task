

import React from 'react';
import LoginForm from "./Login.form.jsx";

const Login = () => {
    return (
        <section className="relative z-[1] py-[100px]">
            {/* Shapes */}
            <div className="absolute top-0 left-0 z-[-1]">
                <img src="/images/shape1.svg" alt="" />
                <img src="/images/dark_shape.svg" alt="" className="hidden" />
            </div>
            <div className="absolute top-0 right-5 z-[-1]">
                <img src="/images/shape2.svg" alt="" />
                <img src="/images/dark_shape1.svg" alt="" className="opacity-50 hidden" />
            </div>
            <div className="absolute bottom-0 right-[327px] z-[-1]">
                <img src="/images/shape3.svg" alt="" />
                <img src="/images/dark_shape2.svg" alt="" className="opacity-50 hidden" />
            </div>

            <div className="container">
                <div className="flex flex-wrap items-center">
                    {/* Left Image */}
                    <div className="w-full lg:w-8/12 xl:w-8/12 mb-10 lg:mb-0">
                        <div className="flex items-start">
                            <img src="/images/login.png" alt="Login" className="max-w-[633px]" />
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="w-full lg:w-4/12 xl:w-4/12">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;