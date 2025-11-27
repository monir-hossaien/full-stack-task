import {useState} from "react";
import {feedStore} from "../../store/feed.store.js";
import PostItem from "./Post.item.jsx";
import PostListSkeleton from "../../skeleton/Post.list.skeleton.jsx";

const PostList = () => {
    const [showMenu, setShowMenu] = useState(null);
    const { postList } = feedStore();

    const toggleMenu = (id) => setShowMenu(showMenu === id ? null : id);

    console.log(postList);

    if(postList === null){
        return (
            <PostListSkeleton />
        )
    }else if(postList.length === 0){
        return (
            <span>No post available !</span>
        )
    }

    return (
        <div>
            {postList?.map((post) => (
                <PostItem
                    key={post?._id}
                    post={post}
                    showMenu={showMenu}
                    toggleMenu={toggleMenu}
                />
            ))}
        </div>
    );
};

export default PostList;