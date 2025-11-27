import React from 'react';
import Skeleton from 'react-loading-skeleton'

const PostListSkeleton = () => {
    return (
        <div className="w-full">
            <Skeleton count={10} />
        </div>
    );
};

export default PostListSkeleton;