import React from "react";
import SignUpForm from "./SignUp.form.jsx";

const SignUp = () => {
    return (
        <section className="relative py-[100px] bg-bg1 z-10 overflow-hidden">

            {/* Shapes */}
            <div className="absolute top-0 left-0 z-[-1]">
                <img src="/images/shape1.svg" className="max-w-none" alt="shape" />
                <img src="/images/dark_shape.svg" className="absolute top-0 left-0 opacity-80" alt={"shape"} />
            </div>

            <div className="absolute top-0 right-5 z-[-1]">
                <img src="/images/shape2.svg" className="max-w-none" alt="shape" />
                <img src="/images/dark_shape1.svg" className="absolute top-0 right-0 opacity-70" alt={"shape"} />
            </div>

            <div className="absolute bottom-0 right-[327px] z-[-1]">
                <img src="/images/shape3.svg" className="max-w-none" alt="shape" />
                <img src="/images/dark_shape2.svg" className="absolute bottom-0 left-0 opacity-70" alt={"shape"} />
            </div>

            <div className="container relative">
                <div className="flex items-center gap-10">

                    {/* Left — Image */}
                    <div className="w-full lg:w-8/12 xl:w-8/12">
                        <div>
                            <img src="/images/registration.png" className="block dark:hidden" alt="registration" />
                            <img src="/images/registration1.png" className="hidden dark:block" alt="registration" />
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="w-full lg:w-4/12 xl:w-4/12">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
