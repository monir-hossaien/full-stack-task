import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {authStore} from "../../store/auth.store.js";
import ValidationHelper, {errorToast, successToast} from "../../helper/helper.js";

const SignUpForm = () => {
    const {loading, formData, inputOnChange, resetFormData, signUpRequest, setLoading} = authStore();
    const navigate = useNavigate();

    console.log(formData);
    

    const handleSignUpRequest = async (e) => {

        try {
            e.preventDefault();
            // Validate form input fields
            if (ValidationHelper.IsEmpty(formData.email)) {
                errorToast("Email is required");
            } else if (!ValidationHelper.IsEmail(formData.email)) {
                errorToast("Invalid email");
            } else if (ValidationHelper.IsEmpty(formData.password)) {
                errorToast("Password is required");
            } else {
                // Prepare data for API request
                const data = {
                    firstName: formData.firstName,
                    lastName: formData.lastName,   
                    email: formData.email,
                    password: formData.password
                };
                setLoading(true); // Show loading spinner or disable button

                // Send API request to sign up user
                const result = await signUpRequest(data);

                if (result.status === true) {
                    // Success: show message, reset form, and redirect
                    successToast(result?.message);
                    resetFormData();
                    navigate("/");
                } else {
                    // Show error message if API response is unsuccessful
                    errorToast(result?.message);
                }

                setLoading(false); // Stop loading
            }
        } catch (error) {
            // Show error if request fails
            errorToast(error?.response?.data?.message || "Something went wrong");
            setLoading(false);
        }
    };



    return (
        <>
            <div className="bg-bg2 p-12 rounded-md shadow-sm">

                {/* Logo */}
                <div className="mb-7 flex justify-center">
                    <img src="/images/logo.svg" className="max-w-[160px]" alt="logo" />
                </div>

                <p className="text-center text-color mb-2">Get Started Now</p>
                <h4 className="text-center text-2xl text-color4 mb-12">Registration</h4>

                {/* Google Button */}
                <button className="w-full border border-bcolor1 bg-bg2 py-3 rounded-md flex justify-center items-center gap-3 mb-10">
                    <img src="/images/google.svg" className="w-5" alt="google" />
                    <span className="text-color2 font-medium">Register with Google</span>
                </button>

                {/* Divider */}
                <div className="relative text-center mb-10">
                    <span className="text-color3 text-sm relative z-10 bg-bg2 px-4">Or</span>
                    <div className="absolute top-1/2 left-0 w-full border-t border-bg4"></div>
                </div>

                {/* Form */}
                <form  className="space-y-3" onSubmit={handleSignUpRequest}>

                    {/* first name */}
                    <div>
                        <label className="block text-color4 font-medium mb-2">First name</label>
                        <input
                            value={formData?.firstName}
                            onChange={(e) => inputOnChange("firstName", e.target.value)}
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder=""
                        />
                    </div>

                    {/* last name */}
                    <div>
                        <label className="block text-color4 font-medium mb-2">Last name</label>
                        <input
                            value={formData?.lastName}
                            onChange={(e) => inputOnChange("lastName", e.target.value)}
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder=""
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-color4 font-medium mb-2">Email</label>
                        <input
                            value={formData?.email}
                            onChange={(e) => inputOnChange("email", e.target.value)}
                            type="email"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder=""
                        />
                    </div>

                    {/* Password */}
                    <div>

                        <label className="block text-color4 font-medium mb-2">Password</label>
                        <input
                            value={formData?.password}
                            onChange={(e) => inputOnChange("password", e.target.value)}
                            type="password"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder=""
                        />
                    </div>

                    {/* Repeat Password */}
                    <div>
                        <label className="block text-color4 font-medium mb-2">Repeat Password</label>
                        <input

                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder=""
                        />
                    </div>

                    {/* Radio */}
                   <div>
                       <label className="flex items-center gap-3 cursor-pointer select-none">
                           <label className="flex items-center space-x-2">
                               <input type="radio" className="h-4 w-4 text-blue-500" />
                               <span className="text-gray-600 text-xs">I agree to terms & conditions</span>
                           </label>
                       </label>
                   </div>

                    {/* Register Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-color5 text-white py-3 rounded-md mt-8 flex justify-center"
                        >
                            {loading ? (
                                <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            ) : (
                                <span>Register</span>
                            )}
                        </button>

                    </div>
                </form>

                {/* Bottom Text */}
                <p className="text-xs text-color mt-8">
                    Already have an account?
                    <Link to={"/"} className="text-color5 ml-1 hover:underline" href="#">
                        Login
                    </Link>
                </p>

            </div>
        </>
    );
};

export default SignUpForm;