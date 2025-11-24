import mongoose from "mongoose";
import {fileUpload} from "../utils/cloudinary.js";
import Post from "../models/post.model.js";
import Like from "../models/like.model.js";
import {convertObjetID} from "../utils/index.js";

// create post
export const createPostService = async(req)=>{
    try{
        const userID = convertObjetID(req.headers.id);
        const {text, privacy} = req.body;

        if(!text){
            return { statusCode: 400, status: false, message: "Post cannot be empty" };
        }

        // file upload to cloudinary
        let imageUrl = null;
        if (req.file) {
            let result = await fileUpload(req.file?.path || "", "feed-app/post");
            imageUrl = result.secure_url;
        }

        // define post data
        const postData = {
            author: userID,
            text,
            privacy,
            image: imageUrl
        }

        const newPost = await Post.create(postData);
        if(!newPost){
            return {statusCode: 400, status: false, message: "Request failed."};
        }
        return {statusCode: 201, status: true, message: "Post successfully created", post: newPost};
    }catch(error){
        return { statusCode: 500,  status: false, message: "Something went wrong!", error: error.message }
    }
}

// fetch all post
export const fetchAllPostService = async(req)=>{
    try{
        const userID = convertObjetID(req.headers.id);
        const cursor = req.query.cursor || null;
        const limit = 10;

        const query = {
            $or: [
                { privacy: "public" },
                { privacy: "private", author: userID }
            ]
        };

        if (cursor) {
            query._id = { $lt: cursor };
        }

        const posts = await Post.find(query)
            .sort({ _id: -1 })
            .limit(limit)
            .populate("author", "firstName lastName email");

        if(!posts || posts.length === 0){
            return {statusCode: 404, status: false, message: "No posts found"};
        }

        return {
            statusCode: 200,
            status: true,
            data: posts,
            nextCursor: posts.length > 0 ? posts[posts.length - 1]._id : null
        };
    }catch(error){
        return { statusCode: 500,  status: false, message: "Something went wrong!", error: error.message }
    }
}


// like post
export const likePostService = async(req)=>{
    try{
        // who like this post
        const userID = convertObjetID(req.headers.id);

        // which post liked that id
        const postID = convertObjetID(req.params.postID);

        // check that post is available in db or not
        const post = await Post.findById(postID);
        if (!post) {
            return {statusCode: 404, status: false, message: "Post not found with that id"};
        }

        // Check if already liked
        const existingLike = await Like.findOne({
            author: userID,
            itemID: postID,
            itemType: "post",
        });

        // If already liked → unlike
        if (existingLike) {
            await Like.deleteOne({ _id: existingLike._id });
            await Post.findByIdAndUpdate(postID, { $inc: { likeCount: -1 } });
            return { statusCode: 200, status: true, liked: false, message: "Post unliked"};
        }

        // If not liked → like it
        await Like.create({
            author: userID,
            itemID: postID,
            itemType: "post",
        });

        await Post.findByIdAndUpdate(postID, { $inc: { likeCount: +1 } });

        return { statusCode: 201, status: true, liked: true, message: "Post liked" };

    }catch(error){
        return { statusCode: 500,  status: false, message: "Something went wrong!", error: error.message }
    }
}
