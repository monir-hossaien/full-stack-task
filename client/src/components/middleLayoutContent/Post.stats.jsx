import React from 'react';
import Emoji from "./Emoji.jsx";


const PostStats = ({post}) => {
    return (
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                    <Emoji emoji="😊" color="bg-yellow-400" />
                    <Emoji emoji="❤️" color="bg-red-500" />
                    <Emoji emoji="👍" color="bg-blue-500 hidden sm:flex" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{post.likeCount}</p>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <p>
                    <span className="font-medium">{post.commentCount}</span> Comment
                </p>
                <p>Share</p>
            </div>
        </div>
    );
};

export default PostStats;