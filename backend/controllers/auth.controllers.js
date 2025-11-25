import bcrypt from "bcrypt";
import {signUpService} from "../services/auth.services.js";
import User from "../models/user.model.js";
import {generateAccessToken, generateRefreshToken, verifyRefreshToken} from "../utils/jwt.js";
import {accessCookieOptions, refreshCookieOptions} from "../utils/index.js";
import RefreshToken from "../models/RefreshToken.model.js";

// sign up
export const signUp = async (req, res) => {
    const result = await signUpService(req);
    return res.status(result.statusCode).json(result);
}




// login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({status: false, message: "Email and password required"})
        }
        // find user is exits or not
        let isUserExits = await User.findOne({email});

        if (!isUserExits) {
            return res.status(404).json({status: false, message: "No account found with that email. Please check for typos and try again."});
        }
        let isMatch = await bcrypt.compare(password, isUserExits.password);

        if(!isMatch){
            return res.status(400).json({status: false, message: "Invalid Credentials"});
        }
        let refreshToken = generateRefreshToken(isUserExits);
        let accessToken = generateAccessToken(isUserExits);

        // Save refreshToken in DB
        await RefreshToken.create({
            user: isUserExits._id,
            token: refreshToken,
            ip: req.ip,
            userAgent: req.headers["user-agent"],
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
        });

        res.cookie("refreshToken", refreshToken, refreshCookieOptions);
        res.cookie("accessToken", accessToken, accessCookieOptions);
        return res.status(200).json({status: true, message: "Login success", accessToken: accessToken});
    } catch (err) {
        return res.status(500).json({ status: false, message: "Something went wrong!", error: err.message });
    }
};


// refresh token
export const refreshToken = async (req, res) => {
    try {
        const oldRefreshToken = req.cookies?.refreshToken;
        if (!oldRefreshToken) {
            return res.status(401).json({ status: false, message: "No refresh token provided"});
        }
        const decoded = await verifyRefreshToken(oldRefreshToken);

        let user = await User.findById(decoded.id);
        if (!user) {
            return res.status(403).json({ status: false, message: "User not found" });
        }
       // Check token in DB
        const storedToken = await RefreshToken.findOne({
            user: decoded.id,
            token: oldRefreshToken
        });

        if (!storedToken){
            return res.status(403).json({ status: false, message: "Invalid refresh token" });
        }
        // Token rotation: delete old one
        await RefreshToken.deleteOne({ token: oldRefreshToken });

        // create new refresh token
        let newRefreshToken = generateRefreshToken(user);
        let newAccessToken = generateAccessToken(user);

        await RefreshToken.create({
            user: decoded.id,
            token: newRefreshToken,
            ip: req.ip,
            userAgent: req.headers["user-agent"],
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        });

        res.cookie("refreshToken", newRefreshToken, refreshCookieOptions);
        res.cookie("accessToken", newAccessToken, accessCookieOptions);

        return res.status(200).json({status: true, message: "Token refreshed", accessToken: newAccessToken});
    }catch(err){
        res.status(500).json({status: false, message: 'Something went wrong!', error: err.message });
    }
}



// logout
export const logout = async(req, res)=>{
    try {
        const token = req.cookies?.refreshToken;
        await RefreshToken.deleteOne({ token });

        res.clearCookie("refreshToken");
        res.clearCookie("accessToken");
        return res.status(200).json({ status: true , message: "Logout success" });
    } catch (error) {
        res.status(500).json({status: false, message: "Something went wrong"})
    }
}


export const checkLoggedIn = async(req, res) => {
    const token = req.cookies?.accessToken;
    if(!token){
        return res.status(401).json({status: false, message: "Not logged in", isLoggedIn: false});
    }
    return res.status(200).json({status: true, message: "User is logged in", isLoggedIn: true});
}   
