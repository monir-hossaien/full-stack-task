import React, {useEffect} from 'react';
import MasterLayout from "../layout/MasterLayout.jsx";
import MainLayout from "../layout/Main.layout.jsx";
import {feedStore} from "../store/feed.store.js";

const FeedPage = () => {
    const {fetchPostList} = feedStore();

    useEffect(() => {
        (async ()=>{
            await fetchPostList();
        })()
    }, [])

    return (
        <MasterLayout>
           <MainLayout />
        </MasterLayout>
    );
};

export default FeedPage;
