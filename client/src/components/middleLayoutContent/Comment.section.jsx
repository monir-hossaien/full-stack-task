import React from 'react';

const CommentSection = () => {
    return (
        <div>
            <button className="text-sm text-gray-600 dark:text-gray-400 underline mb-3">
                View previous comments
            </button>

            <div className="flex gap-3">
                <img
                    src="https://via.placeholder.com/40"
                    className="w-10 h-10 rounded-full"
                    alt=""
                />
                <p className="text-gray-700 dark:text-gray-300 text-sm">Sample comment…</p>
            </div>
        </div>
    );
};

export default CommentSection;