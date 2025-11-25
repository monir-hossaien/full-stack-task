import React from 'react';
import ExploreItem from "../components/leftSidebar/ExploreItem.jsx";
import SuggestedPeople from "../components/leftSidebar/Suggested.people.jsx";
import Event from "../components/leftSidebar/Event.jsx";

const LeftSidebar = () => {

    return (
        <>
            {/* Explore Section */}
            <ExploreItem />

            {/* Suggested People Section */}
            <SuggestedPeople />

            {/* Events Section */}
            <Event />
        </>
    );
};

export default LeftSidebar;