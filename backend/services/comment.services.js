
import {convertObjetID} from "../utils/index.js";
import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";
import Like from "../models/like.model.js";

// create comment in a single post
export const createCommentService = async(req)=>{
    try{
        const postID = convertObjetID(req.params.postID);
        const userID = convertObjetID(req.headers.id);
        const post = await Post.findById(postID);
        if (!post) return { statusCode: 404, status: false, message: "Post not found" };

        const {text, parentCommentID} = req.body;
        if(!text){
            return {statusCode: 400, status: false, message: "Text must be required to create a comment"};
        }
        // define comment data
        const commentData = {
            postID,
            author: userID,
            text,
            parentComment: parentCommentID,
        }

        const newComment = await Comment.create(commentData);
        if(!newComment){
            return {statusCode: 400, status: false, message: "Failed to create comment"};
        }

        await Post.updateOne({_id: postID}, { $inc: { commentCount: 1 }});
        return {statusCode: 201, status: true, message: "Comment created successfully", comment: newComment};

    }catch(error){
        return { statusCode: 500,  status: false, message: "Something went wrong!", error: error.message }
    }
}

// fetch all comments in a single post
export const fetchCommentsService = async(req)=>{
    try{
        const postID = convertObjetID(req.params.postID);
        const matchStage = {
            $match: {postID},
        }
        //join with user collection
        const joinWithUser = {
            $lookup: {
                from: "users",
                localField: "author",
                foreignField: "_id",
                as: "author",
            }
        }
        // use projection due to fetch essential data
        const projection = {
            $project: {
                text: 1,
                parentComment: 1,
                "author.firstName": 1,
                "author.lastName": 1
            }
        }
        const pipeline = [
            matchStage,
            {$sort: {createdAt: -1}},
            joinWithUser,
            { $unwind: { path: "$users", preserveNullAndEmptyArrays: true } },
            projection,
        ]

        const comments = await Comment.aggregate(pipeline);
        if(!comments) return { statusCode: 404, status: false, message: "Comments not found with this post" };

        return { statusCode: 200, status: true, data: comments };
    }catch(error){
        return { statusCode: 500,  status: false, message: "Something went wrong!", error: error.message }
    }
}



// get all Replies in a single comment
export const fetchRepliesService = async(req)=>{
    try{
        const commentID = convertObjetID(req.params.commentID);

        // query of all replay to provided comment and also with who is replay that comment
        const matchStage = {
            $match: {parentComment: commentID},
        }

        //join with user collection
        const joinWithUser = {
            $lookup: {
                from: "users",
                localField: "author",
                foreignField: "_id",
                as: "author",
            }
        }
        // use projection due to fetch essential data
        const projection = {
            $project: {
                text: 1,
                "author.firstName": 1,
                "author.lastName": 1
            }
        }

        const pipeline = [
            matchStage,
            {$sort: {createdAt: -1}},
            joinWithUser,
            { $unwind: { path: "$users", preserveNullAndEmptyArrays: true } },
            projection,
        ]
        const replies = await Comment.aggregate(pipeline);

        if(!replies) return { statusCode: 404, status: false, message: "No replay found with this comment" };

        return { statusCode: 200, status: true, data: replies };
    }catch(error){
        return { statusCode: 500,  status: false, message: "Something went wrong!", error: error.message }
    }
}


// like a single Comment
export const likeCommentService = async(req)=>{
    try{
        // who like this post
        const userID = convertObjetID(req.headers.id);
        const commentID = convertObjetID(req.params.commentID);

        // check that comment is available in db or not
        const comment = await Comment.findById(commentID);
        if (!comment) {
            return {statusCode: 404, status: false, message: "Comment not found with that id"};
        }
        // Check if already liked that comment
        const existingLike = await Like.findOne({
            author: userID,
            itemID: commentID,
            itemType: "comment",
        });
        // If already liked → unlike
        if (existingLike) {
            await Like.deleteOne({ _id: existingLike._id });
            await Comment.findByIdAndUpdate(commentID, { $inc: { likeCount: -1 } });
            return { statusCode: 200, status: true, liked: false, message: "Comment unliked"};
        }

        // If not liked → like it
        await Like.create({
            author: userID,
            itemID: commentID,
            itemType: "comment",
        });

        await Comment.findByIdAndUpdate(commentID, { $inc: { likeCount: +1 } });

        return { statusCode: 201, status: true, liked: true, message: "Comment liked" };

    }catch(error){
        return { statusCode: 500,  status: false, message: "Something went wrong!", error: error.message }
    }
}


// fetch all like a single comments
export const fetchCommentLikesService = async(req)=>{
    try{
        const commentID = convertObjetID(req.params.commentID);
        const matchStage = {
            $match: {itemID: commentID, itemType: "comment"},
        }
        //join with user collection
        const joinWithUser = {
            $lookup: {
                from: "users",
                localField: "author",
                foreignField: "_id",
                as: "author",
            }
        }
        // use projection due to fetch essential data
        const projection = {
            $project: {
                parentComment: 1,
                "author.firstName": 1,
                "author.lastName": 1
            }
        }
        const pipeline = [
            matchStage,
            joinWithUser,
            { $unwind: { path: "$users", preserveNullAndEmptyArrays: true } },
            projection,
        ]

        const likes = await Like.aggregate(pipeline);
        if(!likes) return { statusCode: 404, status: false, message: "No like found with that comment" };
        return { statusCode: 200, status: true, data: likes };
    }catch(error){
        return { statusCode: 500,  status: false, message: "Something went wrong!", error: error.message }
    }
}