import React from 'react';

const DropdownMenu = () => {
    return (
        <div className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-900 shadow-xl rounded-lg py-2 w-56 z-10 border border-gray-200 dark:border-gray-700">
            <ul>
                {["Save Post", "Turn On Notification", "Hide", "Edit", "Delete Post"].map(
                    (item, i) => (
                        <li key={i}>
                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                                {item}
                            </button>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default DropdownMenu;