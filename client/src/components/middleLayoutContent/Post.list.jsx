import {useState} from "react";
import {feedStore} from "../../store/feed.store.js";
import PostItem from "./Post.item.jsx";

const PostList = () => {
    const [showMenu, setShowMenu] = useState(null);
    const { postList } = feedStore();

    const toggleMenu = (id) => setShowMenu(showMenu === id ? null : id);

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