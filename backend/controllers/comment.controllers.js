
// create comment in a single post
import {
    createCommentService,
    fetchCommentsService,
    fetchCommentLikesService,
    fetchRepliesService,
    likeCommentService
} from "../services/comment.services.js";

export const createComment = async(req, res)=>{
    const result = await createCommentService(req)
    return res.status(result.statusCode).json(result)
}


// fetch all comments in a single post
export const fetchComments  = async(req, res)=>{
    const result = await fetchCommentsService(req)
    return res.status(result.statusCode).json(result)
}

// get all Replies in a single comment
export const fetchReplies  = async(req, res)=>{
    const result = await fetchRepliesService(req)
    return res.status(result.statusCode).json(result)
}

// like a single Comment
export const likeComment  = async(req, res)=>{
    const result = await likeCommentService(req)
    return res.status(result.statusCode).json(result)
}

// fetch all like a single comments
export const fetchCommentLikes  = async(req, res)=>{
    const result = await fetchCommentLikesService(req)
    return res.status(result.statusCode).json(result)
}