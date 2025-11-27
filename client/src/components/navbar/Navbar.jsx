import {useEffect, useRef, useState} from 'react';
import {
    Search,
    ChevronDown,
    Settings,
    HelpCircle,
    LogOut
} from 'lucide-react';
import {Link} from "react-router-dom";
import {notifications} from "../../dummyData/index.jsx";
import {errorToast, successToast} from "../../helper/helper.js";
import {useAuth} from "../../context/auth.context.jsx";

export default function Navbar() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showNotificationSettings, setShowNotificationSettings] = useState(false);
    const [focus, setFocus] = useState(false);
    const {user, logout} = useAuth();


    const fullName = user?.firstName+ " " +user?.lastName;


    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // If click is outside the search input, set focus to false
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setFocus(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const handleLogOut = async() => {
        try {
            const result = await logout()
            if(result?.status === true){
                window.location.href= "/";
                successToast(result?.message)
            }
        }catch(error) {
            errorToast(error?.message)
        }
    }


    return (
        <nav className="bg-white dark:bg-gray-900 sticky top-0 z-[1030] shadow-sm">
            <div className="container px-4">
                <div className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/feed" className="flex items-center">
                            <img src="/images/logo.svg" alt="Logo" className="max-width[169px]"/>
                        </Link>
                    </div>

                    {/*mobile search icon*/}
                    <div className="block lg:hidden">
                        <form className="_header_form_grp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
                                <circle cx="7" cy="7" r="6" stroke="#666" />
                                <path stroke="#666" strokeLinecap="round" d="M16 16l-3-3" />
                            </svg>
                        </form>
                    </div>

                    {/* Search */}
                    <div className="flex-1 max-w-md mx-8 hidden lg:block">
                        <div className="relative" ref={searchRef}>
                            <Search className="absolute top-3 left-4 pointer-events-none text-gray-500" size={18}/>
                            <input
                                onClick={() => setFocus(true)}
                                className="w-full pl-12 pr-4 py-1.5 rounded-full border border-gray-100 hover:border-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                type="search"
                                placeholder={focus ? "": "input search text"}
                            />
                        </div>
                    </div>

                    {/* Navigation Items */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-3">
                        {/* Home */}
                        <Link
                            to="/feed"
                            className="relative p-4 hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:w-full hover:before:h-0.5 hover:before:bg-blue-500 before:transition-all before:duration-200 text-gray-600 dark:text-gray-400 hover:text-blue-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="21"
                                fill="none"
                                viewBox="0 0 18 21"
                            >
                                <path
                                    className="_home_active"
                                    stroke="#000"
                                    strokeWidth="1.5"
                                    strokeOpacity=".6"
                                    d="M1 9.924c0-1.552 0-2.328.314-3.01.313-.682.902-1.187 2.08-2.196l1.143-.98C6.667 1.913 7.732 1 9 1c1.268 0 2.333.913 4.463 2.738l1.142.98c1.179 1.01 1.768 1.514 2.081 2.196.314.682.314 1.458.314 3.01v4.846c0 2.155 0 3.233-.67 3.902-.669.67-1.746.67-3.901.67H5.57c-2.155 0-3.232 0-3.902-.67C1 18.002 1 16.925 1 14.77V9.924z"
                                />
                                <path
                                    className="_home_active"
                                    stroke="#000"
                                    strokeOpacity=".6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M11.857 19.341v-5.857a1 1 0 00-1-1H7.143a1 1 0 00-1 1v5.857"
                                />
                            </svg>

                        </Link>

                        {/* Friend Request */}
                        <Link to="/friend-request"
                              className="relative p-4 text-gray-600 dark:text-gray-400 hover:text-blue-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="20"
                                fill="none"
                                viewBox="0 0 26 20"
                            >
                                <path
                                    fill="#000"
                                    fillOpacity=".6"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12.79 12.15h.429c2.268.015 7.45.243 7.45 3.732 0 3.466-5.002 3.692-7.415 3.707h-.894c-2.268-.015-7.452-.243-7.452-3.727 0-3.47 5.184-3.697 7.452-3.711l.297-.001h.132zm0 1.75c-2.792 0-6.12.34-6.12 1.962 0 1.585 3.13 1.955 5.864 1.976l.255.002c2.792 0 6.118-.34 6.118-1.958 0-1.638-3.326-1.982-6.118-1.982zm9.343-2.224c2.846.424 3.444 1.751 3.444 2.79 0 .636-.251 1.794-1.931 2.43a.882.882 0 01-1.137-.506.873.873 0 01.51-1.13c.796-.3.796-.633.796-.793 0-.511-.654-.868-1.944-1.06a.878.878 0 01-.741-.996.886.886 0 011.003-.735zm-17.685.735a.878.878 0 01-.742.997c-1.29.19-1.944.548-1.944 1.059 0 .16 0 .491.798.793a.873.873 0 01-.314 1.693.897.897 0 01-.313-.057C.25 16.259 0 15.1 0 14.466c0-1.037.598-2.366 3.446-2.79.485-.06.929.257 1.002.735zM12.789 0c2.96 0 5.368 2.392 5.368 5.33 0 2.94-2.407 5.331-5.368 5.331h-.031a5.329 5.329 0 01-3.782-1.57 5.253 5.253 0 01-1.553-3.764C7.423 2.392 9.83 0 12.789 0zm0 1.75c-1.987 0-3.604 1.607-3.604 3.58a3.526 3.526 0 001.04 2.527 3.58 3.58 0 002.535 1.054l.03.875v-.875c1.987 0 3.605-1.605 3.605-3.58S14.777 1.75 12.789 1.75zm7.27-.607a4.222 4.222 0 013.566 4.172c-.004 2.094-1.58 3.89-3.665 4.181a.88.88 0 01-.994-.745.875.875 0 01.75-.989 2.494 2.494 0 002.147-2.45 2.473 2.473 0 00-2.09-2.443.876.876 0 01-.726-1.005.881.881 0 011.013-.721zm-13.528.72a.876.876 0 01-.726 1.006 2.474 2.474 0 00-2.09 2.446A2.493 2.493 0 005.86 7.762a.875.875 0 11-.243 1.734c-2.085-.29-3.66-2.087-3.664-4.179 0-2.082 1.5-3.837 3.566-4.174a.876.876 0 011.012.72z"
                                />
                            </svg>

                        </Link>

                        {/* Notifications */}
                        <div className="relative">
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className="relative p-4 text-gray-600 dark:text-gray-400 hover:text-blue-500"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="none" viewBox="0 0 20 22">
                                    <path
                                        fill="#000"
                                        fillOpacity=".6"
                                        fillRule="evenodd"
                                        d="M7.547 19.55c.533.59 1.218.915 1.93.915.714 0 1.403-.324 1.938-.916a.777.777 0 011.09-.056c.318.284.344.77.058 1.084-.832.917-1.927 1.423-3.086 1.423h-.002c-1.155-.001-2.248-.506-3.077-1.424a.762.762 0 01.057-1.083.774.774 0 011.092.057zM9.527 0c4.58 0 7.657 3.543 7.657 6.85 0 1.702.436 2.424.899 3.19.457.754.976 1.612.976 3.233-.36 4.14-4.713 4.478-9.531 4.478-4.818 0-9.172-.337-9.528-4.413-.003-1.686.515-2.544.973-3.299l.161-.27c.398-.679.737-1.417.737-2.918C1.871 3.543 4.948 0 9.528 0zm0 1.535c-3.6 0-6.11 2.802-6.11 5.316 0 2.127-.595 3.11-1.12 3.978-.422.697-.755 1.247-.755 2.444.173 1.93 1.455 2.944 7.986 2.944 6.494 0 7.817-1.06 7.988-3.01-.003-1.13-.336-1.681-.757-2.378-.526-.868-1.12-1.851-1.12-3.978 0-2.514-2.51-5.316-6.111-5.316z"
                                        clipRule="evenodd"
                                    />
                                </svg>

                                <span
                                    className="absolute bg-blue-500 border-2 border-white dark:border-gray-900 rounded-full min-w-[18px] h-[18px] text-[11px] text-white top-3 right-2.5 px-1 flex items-center justify-center font-medium">
                                    6
                                </span>
                            </button>

                            {/* Notification Dropdown */}
                            {showNotifications && (
                                <div
                                    className="absolute right-0 lg:left-[-180px] top-full mt-2 bg-white dark:bg-gray-900 shadow-xl rounded-lg p-4 w-[90vw] max-w-[400px] max-h-[calc(100vh-100px)] overflow-auto">
                                    <div className="flex items-center justify-between mb-5">
                                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Notifications</h4>
                                        <div className="relative">
                                            <button
                                                onClick={() => setShowNotificationSettings(!showNotificationSettings)}
                                                className="p-1 text-gray-400 hover:text-gray-600"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="17" fill="none" viewBox="0 0 4 17">
                                                    <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
                                                    <circle cx="2" cy="8" r="2" fill="#C4C4C4" />
                                                    <circle cx="2" cy="15" r="2" fill="#C4C4C4" />
                                                </svg>

                                            </button>
                                            {showNotificationSettings && (
                                                <div
                                                    className="absolute right-0 top-full mt-1 bg-white dark:bg-gray-900 shadow-xl rounded-lg p-4 w-56">
                                                    <ul className="space-y-2">
                                                        <li>
                                                            <button
                                                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 w-full text-left">Mark
                                                                as all read
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button
                                                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 w-full text-left">Notifications
                                                                settings
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button
                                                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 w-full text-left">Open
                                                                Notifications
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex gap-2 mb-5">
                                        <button
                                            className="px-3 py-2 text-sm font-medium text-blue-500 bg-blue-50 dark:bg-blue-900/30 border border-gray-200 dark:border-gray-700 rounded-md">
                                            All
                                        </button>
                                        <button
                                            className="px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-md">
                                            Unread
                                        </button>
                                    </div>

                                    <div className="space-y-2">
                                        {[...notifications, ...notifications, ...notifications].map((notif, idx) => (
                                            <div key={idx}
                                                 className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                                                <img src={notif.image} alt="User"
                                                     className="w-14 h-14 rounded-full object-cover flex-shrink-0"/>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                        <span
                                                            className="text-gray-800 dark:text-gray-100 font-medium">{notif.user}</span> {notif.action}
                                                    </p>
                                                    <span
                                                        className="text-xs text-blue-500 font-semibold mt-1 inline-block">{notif.time}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Messages */}
                        <Link to="/chat" className="relative p-4 text-gray-600 dark:text-gray-400 hover:text-blue-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="22"
                                fill="none"
                                viewBox="0 0 23 22"
                            >
                                <path
                                    fill="#000"
                                    fillOpacity=".6"
                                    fillRule="evenodd"
                                    d="M11.43 0c2.96 0 5.743 1.143 7.833 3.2 4.32 4.29 4.32 11.27 0 15.56-2.12 2.11-4.97 3.22-7.86 3.22-1.57 0-3.16-.33-4.64-1.01-.44-.18-.85-.34-1.14-.34-.34 0-.79.16-1.23.31-.9.3-2.02.68-2.85-.14-.83-.82-.45-1.93-.14-2.83.15-.44.31-.9.31-1.24 0-.28-.14-.64-.35-1.16C-.57 11.46.32 6.47 3.6 3.22A11.04 11.04 0 0111.43 0zm0 1.53A9.5 9.5 0 004.69 4.31a9.46 9.46 0 00-1.91 10.69c.24.59.47 1.17.47 1.77 0 .6-.21 1.2-.39 1.73-.15.44-.38 1.1-.23 1.25.14.14.81-.09 1.25-.23.53-.18 1.13-.39 1.73-.39.6 0 1.16.22 1.76.46 3.66 1.68 7.98.91 10.8-1.88 3.71-3.69 3.71-9.7 0-13.39a9.5 9.5 0 00-6.74-2.77zm4.07 8.87c.57 0 1.03.46 1.03 1.02 0 .57-.46 1.03-1.03 1.03a1.03 1.03 0 11-.01-2.06h.01zm-4.13 0c.57 0 1.03.46 1.03 1.02 0 .57-.46 1.03-1.03 1.03a1.03 1.03 0 01-1.03-1.02c0-.56.46-1.03 1.03-1.03h.01zm-4.13 0c.57 0 1.03.46 1.03 1.02 0 .57-.46 1.03-1.03 1.03a1.03 1.03 0 11-.01-2.06h.01z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <span
                                className="absolute bg-blue-500 border-2 border-white dark:border-gray-900 rounded-full min-w-[18px] h-[18px] text-[11px] text-white top-3 right-2.5 px-1 flex items-center justify-center font-medium">
                                2
                            </span>
                        </Link>

                        {/* Profile Dropdown */}
                        <div className="relative" >
                            <div
                                onClick={() => setShowProfileMenu(!showProfileMenu)}
                                className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <img src={user?.image || "/images/Avatar.png"} alt="Profile"
                                     className="w-8 h-8 rounded-full object-cover"/>
                                <span className="text-gray-800 dark:text-gray-100 font-medium hidden lg:block">{fullName}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none" viewBox="0 0 10 6">
                                    <path fill="#112032" d="M5 5l.354.354L5 5.707l-.354-.353L5 5zm4.354-3.646l-4 4-.708-.708 4-4 .708.708zm-4.708 4l-4-4 .708-.708 4 4-.708.708z" />
                                </svg>
                            </div>

                            {/* Profile Menu */}
                            {showProfileMenu && (
                                <div
                                    className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-900 shadow-xl rounded-lg p-4 w-64">
                                    <div
                                        className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                                        <img src={user?.image || "/images/Avatar.png"} alt="Profile"
                                             className="w-12 h-12 rounded-full object-cover"/>
                                        <div>
                                            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-100">{fullName}</h4>
                                            <Link to="/profile" className="text-sm text-blue-500 hover:underline">View Profile</Link>
                                        </div>
                                    </div>

                                    <ul className="space-y-1">
                                        <li>
                                            <Link
                                                to="/settings"
                                                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Settings size={18} className="text-blue-500"/>
                                                    <span className="text-sm text-gray-800 dark:text-gray-100">Settings</span>
                                                </div>
                                                <ChevronDown size={14} className="text-gray-400 rotate-[-90deg]"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/help"
                                                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <HelpCircle size={18} className="text-blue-500"/>
                                                    <span className="text-sm text-gray-800 dark:text-gray-100">Help & Support</span>
                                                </div>
                                                <ChevronDown size={14} className="text-gray-400 rotate-[-90deg]"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleLogOut}
                                                type="button"
                                                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <LogOut size={18} className="text-blue-500"/>
                                                    <span className="text-sm text-gray-800 dark:text-gray-100">Log Out</span>
                                                </div>
                                                <ChevronDown size={14} className="text-gray-400 rotate-[-90deg]"/>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}