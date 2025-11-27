import React from "react";

const ProgressBar = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[9999]">
            <div className="h-full bg-blue-500 animate-progress" />
        </div>
    );
};

export default ProgressBar;
