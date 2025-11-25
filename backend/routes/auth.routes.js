import express from 'express';

import * as authController from '../controllers/auth.controllers.js';
import {authenticateUser} from "../middlewares/auth.js";


const router = express.Router();

router.post('/register', authController.signUp);
router.post('/login', authController.login);
router.post("/refresh-token", authenticateUser, authController.refreshToken);
router.get("/logout", authenticateUser, authController.logout);
router.get("/check-logged-in", authenticateUser, authController.checkLoggedIn);




export default router;