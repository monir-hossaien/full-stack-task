import React from 'react';
import {navItems} from "../../dummyData/index.jsx";
import {Link, useLocation} from "react-router-dom";

const BottomNavbar = () => {

    const location = useLocation();

    return (
        <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-md z-50 block lg:hidden">
            <div className="max-w-xl mx-auto flex justify-between items-center py-5 px-4">
                {navItems.map((item, idx) => (

                    <Link
                        key={idx}
                        to={item?.path}
                        className={`relative flex flex-col items-center justify-center text-gray-600 ${
                            location.pathname === item?.path ? "text-blue-500" : ""
                        }`}
                    >
                        {item?.icon}
                        {item.badge > 0 && (
                            <span
                                className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white bg-blue-500 rounded-full">
                {item.badge}
                            </span>
                        )}
                    </Link>
                ))}

                {/* Mobile menu toggle */}
                <button className="flex flex-col items-center justify-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="none" viewBox="0 0 18 14">
                        <path stroke="#666" strokeLinecap="round" strokeWidth="1.5" d="M1 1h16M1 7h16M1 13h16"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BottomNavbar;