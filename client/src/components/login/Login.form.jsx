import React from 'react';
import {Link} from 'react-router-dom';

const LoginForm = () => {


    return (
        <>
            <div className="bg-white p-12 rounded-md shadow-sm">
                {/* Logo */}
                <div className="flex justify-center mb-7">
                    <img src="/images/logo.svg" alt="Logo" className="max-w-[161px]" />
                </div>

                {/* Title */}
                <p className="text-center text-gray-600 mb-2">Welcome back</p>
                <h4 className="text-center text-2xl font-semibold mb-12">Login to your account</h4>

                {/* Google Login */}
                <button className="w-full border border-gray-300 rounded-md py-3 mb-10 flex items-center justify-center hover:bg-gray-50">
                    <img src="/images/google.svg" alt="Google" className="w-5 mr-2" />
                    <span className="text-gray-700 font-medium">Or sign-in with Google</span>
                </button>

                {/* Divider */}
                <div className="relative text-center mb-10">
                    <span className="bg-white px-3 text-gray-500">Or</span>
                    <div className="absolute left-0 top-1/2 w-28 border-t border-gray-300 -translate-y-1/2"></div>
                    <div className="absolute right-0 top-1/2 w-28 border-t border-gray-300 -translate-y-1/2"></div>
                </div>

                {/* Form */}
                <form  className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder=""
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-2">Password</label>
                        <input
                            // type="password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder=""
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2">
                            <input type="radio" className="h-4 w-4 text-blue-500" /><span className="text-gray-600 text-sm">Remember me</span>
                        </label>
                        <p className="text-blue-500 text-sm cursor-pointer">Forgot password?</p>
                    </div>

                    <div className="py-7">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-600 transition"
                        >
                            Login now
                        </button>
                    </div>
                </form>

                {/* Bottom Text */}
                <p className="text-gray-500 text-sm mt-6">
                    Don't have an account?{' '}
                    <Link to={"/sign-up"} className="text-blue-500 hover:underline">
                        Create New Account
                    </Link>
                </p>
            </div>
        </>
    );
};

export default LoginForm;