import React from 'react';

const CommentBox = () => {
    return (
        <div className="flex gap-3 mb-4">
            <img
                src="https://via.placeholder.com/40"
                className="w-10 h-10 rounded-full"
                alt={""}
            />
            <textarea
                rows="1"
                placeholder="Write a comment"
                className="flex-1 p-3 border border-gray-300 dark:border-gray-700 rounded-lg resize-none bg-gray-50 dark:bg-gray-800 text-sm"
            />
        </div>
    );
};

export default CommentBox;