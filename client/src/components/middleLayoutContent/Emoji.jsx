import React from 'react';

const Emoji = ({ emoji, color }) => {
    return (
        <span
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${color}`}
        >
            {emoji}
        </span>
    );
};

export default Emoji;