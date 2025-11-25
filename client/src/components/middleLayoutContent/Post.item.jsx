
import {DockIcon} from "lucide-react";
import PostStats from "./Post.stats.jsx";
import CommentBox from "./Comment.box.jsx";
import CommentSection from "./Comment.section.jsx";

const PostItem = ({ post, showMenu, toggleMenu }) => {
    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 mb-4">

            {/* Top Section */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex gap-3">
                    <img
                        src={post?.image}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                            {post?.author?.firstName} {post?.author?.lastName}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {post?.createdAt} ·{" "}
                            <span className="text-blue-500">{post?.privacy}</span>
                        </p>
                    </div>
                </div>

                {/* Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => toggleMenu(post?._id)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                    >
                        <DockIcon />
                    </button>

                    {showMenu === post?._id && <DropDownMenu />}
                </div>
            </div>

            {/* Post Content */}
            <h4 className="text-gray-800 dark:text-gray-100 mb-3">{post.title}</h4>

            <div className="rounded-lg overflow-hidden mb-4">
                <img src={post.image} alt="" className="w-full h-auto" />
            </div>

            {/* Likes & Comments Count */}
            <PostStats post={post} />

            {/* Reaction Buttons */}


            {/* Comment Input */}
           <CommentBox />

            {/* Comments Section */}
            <CommentSection />
        </div>
    );
};


export default PostItem;