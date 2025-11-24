import express from 'express';
import * as postController from '../controllers/post.controllers.js';
import {authenticateUser} from "../middlewares/auth.js";
import {upload} from "../utils/cloudinary.js";
const router = express.Router();

router.post('/create-post', authenticateUser, upload.single("image"), postController.createPost);
router.get('/fetch-posts', authenticateUser, postController.fetchAllPost);
router.post('/like-post/:postID', authenticateUser, postController.likePost);






export default router;