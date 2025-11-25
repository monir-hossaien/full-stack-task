import React from 'react';
import DesktopStories from "../components/middleLayoutContent/Desktop.stories.jsx";
import MobileStories from "../components/middleLayoutContent/Mobile.stories.jsx";
import CreatePost from "../components/middleLayoutContent/Create.post.jsx";
import PostList from "../components/middleLayoutContent/Post.list.jsx";

const MiddleLayout = () => {

    return (
        <>
            {/* Desktop Stories */}
            <DesktopStories />
            <MobileStories />
            <CreatePost />
            <PostList />
        </>
    );
};

export default MiddleLayout;