

import {createPostService, fetchAllPostService, likePostService} from "../services/post.services.js";

// create post
export const createPost = async(req, res)=>{
    const result = await createPostService(req)
    return res.status(result.statusCode).json(result)
}


// get all post as newest first
export const fetchAllPost = async(req,res)=>{
    const result = await fetchAllPostService(req)
    return res.status(result.statusCode).json(result)
}

// like post
export const likePost = async(req,res)=>{
    const result = await likePostService(req)
    return res.status(result.statusCode).json(result)
}