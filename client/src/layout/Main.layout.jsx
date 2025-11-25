import React from 'react';
import LeftSidebar from "./Left.sidebar.jsx";
import DesktopStories from "../components/middleLayoutContent/Desktop.stories.jsx";
import MiddleLayout from "./Middle.layout.jsx";
import RightSidebar from "./Right.sidebar.jsx";

const MainLayout = () => {
    return (
        <div className="flex justify-between gap-5">

            {/* Left Sidebar */}
            <div className="hidden lg:block  lg:w-1/4 xl:w-1/4">
                <div className="_layout_left_sidebar_wrap">
                    <LeftSidebar />
                </div>
            </div>

            {/* Middle Layout */}
            <div className="w-full lg:w-1/2">
                <div className="_layout_middle_wrap">
                    <div className="_layout_middle_inner">
                        <MiddleLayout />
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block lg:w-1/4 xl:w-1/4">
                <div className="_layout_right_sidebar_wrap">
                    <RightSidebar />
                </div>
            </div>

        </div>
    );
};

export default MainLayout;