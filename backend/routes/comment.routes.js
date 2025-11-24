import express from 'express';
import * as commentController from '../controllers/comment.controllers.js';
import {authenticateUser} from "../middlewares/auth.js";
const router = express.Router();


router.post("/create-comment/:postID", authenticateUser, commentController.createComment);
router.get("/fetch-comments/:postID", authenticateUser, commentController.fetchComments);
router.get("/fetch-replies/:commentID", authenticateUser, commentController.fetchReplies);
router.post("/like-comment/:commentID", authenticateUser, commentController.likeComment);
router.get("/fetch-comment-likes/:commentID", authenticateUser, commentController.fetchCommentLikes);

export default router;